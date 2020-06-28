import { ColumnModel, RowModel } from './row.model';
import { FieldModel, SchemaModel } from './schema.model';
import { StringService } from './services/string.service';

export interface FieldGenerator<P extends FieldModel, R> {
  type: string;

  generate(field: P): ColumnModel<R>;
}

export class RowGenerator {
  private readonly fieldGenerators = new Map<string, FieldGenerator<any, any>>()
  private readonly stringService = new StringService()

  registerGenerator(fieldGenerator: FieldGenerator<any, any>): RowGenerator {
    const key = this.stringService.formatCamelCase(fieldGenerator.type);
    this.fieldGenerators.set(key, fieldGenerator)
    return this
  }

  generatorNumber(): number {
    return this.fieldGenerators.size;
  }

  generate(schema: SchemaModel): RowModel {
    const row: RowModel = {columns: []}

    for (const field of schema.fields) {
      const key = this.stringService.formatCamelCase(field.type);
      const fieldGenerator = this.fieldGenerators.get(key);
      if (fieldGenerator) {
        const column = fieldGenerator.generate(field);
        row.columns.push(column)
      }
    }

    return row
  }
}
