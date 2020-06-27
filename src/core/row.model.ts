export interface RowModel {
  columns: ColumnModel<any>[]
}

export interface ColumnModel<T> {
  key: string,
  value: T
}
