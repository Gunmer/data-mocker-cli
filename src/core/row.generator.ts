import { ColumnModel, RowModel } from './row.model';
import { FieldModel, SchemaModel } from './schema.model';

export interface FieldGenerator<P extends FieldModel, R> {
  type: string

  generate(field: P): ColumnModel<R>
}

export class RowGenerator {
  private fieldGenerators = new Map<string, FieldGenerator<any, any>>()

  registerGenerator(fieldGenerator: FieldGenerator<any, any>): RowGenerator {
    this.fieldGenerators.set(fieldGenerator.type, fieldGenerator)
    return this
  }

  generate(schema: SchemaModel): RowModel {
    let row: RowModel = {columns: []}

    for (let field of schema.fields) {
      let fieldGenerator = this.fieldGenerators.get(field.type);
      if (fieldGenerator) {
        let column = fieldGenerator.generate(field);
        row.columns.push(column)
      }
    }

    return row
  }
}
