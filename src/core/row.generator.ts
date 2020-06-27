import { ColumnModel, RowModel } from './row.model';
import { FieldModel, SchemaModel } from './schema.model';
import { StringService } from './services/string.service';

export interface FieldGenerator<P extends FieldModel, R> {
  type: string

  generate(field: P): ColumnModel<R>
}

export class RowGenerator {
  private readonly fieldGenerators = new Map<string, FieldGenerator<any, any>>()
  private readonly stringService = new StringService()

  registerGenerator(fieldGenerator: FieldGenerator<any, any>): RowGenerator {
    let key = this.stringService.formatCamelCase(fieldGenerator.type);
    this.fieldGenerators.set(key, fieldGenerator)
    return this
  }

  generate(schema: SchemaModel): RowModel {
    let row: RowModel = {columns: []}

    for (let field of schema.fields) {
      let key = this.stringService.formatCamelCase(field.type);
      let fieldGenerator = this.fieldGenerators.get(key);
      if (fieldGenerator) {
        let column = fieldGenerator.generate(field);
        row.columns.push(column)
      }
    }

    return row
  }
}
