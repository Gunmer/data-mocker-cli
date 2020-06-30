import { FieldModel } from '../../core/schema.model';

export interface EnumFieldModel extends FieldModel {
  source: string[];
}
