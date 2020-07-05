import { FieldModel } from '../../core/models/field.model';

export interface PhoneFieldModel extends FieldModel {
  prefix?: string;
  pattern?: string;
}
