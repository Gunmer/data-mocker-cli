import { FieldModel, SchemaModel } from '../../src/core/schema.model';

export class SchemaFixture {
  static getSchema(...fields: FieldFixtureOptions[]): SchemaModel {
    return {
      fields: fields.map(f => this.getField(f))
    }
  }

  static getField(opts: FieldFixtureOptions): FieldModel {
    return {
      type: opts.type,
      name: opts.name ?? opts.type,
      isNullable: opts.isNullable
    }
  }
}

interface FieldFixtureOptions {
  type: string,
  name?: string,
  isNullable?: boolean
}
