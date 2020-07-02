import { FieldModel } from '../../core/models/field.model';

export interface NumberFieldModel extends FieldModel {
  max?: number;
  min?: number;
}
