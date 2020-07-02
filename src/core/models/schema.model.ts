import { FieldModel } from './field.model';

export interface SchemaModel {
  tableName?: string;
  fields: FieldModel[];
}
