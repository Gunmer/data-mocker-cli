import { FieldModel } from '../../core/schema.model';

export interface StringFieldModel extends FieldModel {
  min?: number;
  max: number;
}
