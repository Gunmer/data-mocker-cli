import { ColumnModel } from './column.model';

export interface RowModel {
  columns: ColumnModel<any>[];
}
