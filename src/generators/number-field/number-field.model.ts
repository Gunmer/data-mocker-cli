import { FieldModel } from '../../core/schema.model';

export interface NumberFieldModel extends FieldModel {
  max?: number;
  min?: number;
}
