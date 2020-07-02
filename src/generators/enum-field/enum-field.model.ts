import { FieldModel } from '../../core/models/field.model';

export interface EnumFieldModel extends FieldModel {
  source: string[];
}
