export interface Field {
  type: string,
  name: string,
  isNullable?: boolean
}

export interface RawField extends Field {
  maxLength: number,
  minLength?: number,
}

export interface EnumField extends Field {
  source: string,
  options?: string[],
}
