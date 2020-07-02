import { FieldModel } from '../../core/models/field.model';

export interface StringFieldModel extends FieldModel {
  min?: number;
  max: number;
}
