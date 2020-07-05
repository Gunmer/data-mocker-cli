import { FieldModel } from '../../core/models/field.model';

export interface EmailFieldModel extends FieldModel {
  domains?: string[];
  userNames?: string[];
}
