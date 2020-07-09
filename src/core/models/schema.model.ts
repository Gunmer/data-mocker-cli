import { FieldModel } from './field.model';
import { NameFormatter } from './name-formatter';

export interface SchemaModel {
  tableName?: string;
  nameFormatter?: NameFormatter;
  fields: FieldModel[];
}
