import { ColumnModel } from './row.model';
import { FieldModel } from './schema.model';

export interface FieldGenerator<P extends FieldModel, R> {
  type: string;

  generate(field: P): ColumnModel<R>;
}
