import { FieldGenerator } from './field.generator';
import { RowModel } from './row.model';
import { SchemaModel } from './schema.model';
import { StringService } from './services/string.service';

export class RowGenerator {
  private readonly fieldGenerators = new Map<string, FieldGenerator<any, any>>()
  private readonly stringService = new StringService()

  register(fieldGenerator: FieldGenerator<any, any>): RowGenerator {
    const key = this.stringService.formatCamelCase(fieldGenerator.type);
    this.fieldGenerators.set(key, fieldGenerator)
    return this
  }

  count(): number {
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
