export interface SchemaModel {
  fields: FieldModel[]
}

export interface FieldModel {
  type: string,
  name: string,
  isNullable?: boolean
}
