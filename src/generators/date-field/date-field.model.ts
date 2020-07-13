import { FieldModel } from '../../core/models/field.model';

export interface DateFieldModel extends FieldModel {
  pattern: string;
  min?: string;
  max?: string;
}
