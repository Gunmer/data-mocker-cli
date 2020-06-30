import { expect } from '@oclif/test';
import { RowGenerator } from '../../src/core/row.generator';
import { NameFieldGenerator } from '../../src/generators/name-field/name-field.generator';
// @ts-ignore
import { SchemaFixture } from './schema.fixture';

describe('RowGenerator', () => {
  const generator = new RowGenerator()

  it('count should be 0 when no generator has yet been registered', () => {
    const count = generator.count();
    expect(count).equal(0)
  })

  it('count should return the number of registered generators', () => {
    const count = generator.register(new NameFieldGenerator()).count();
    expect(count).equal(1)
  })

  it('generate should return empty row when given empty schema', () => {
    const schema = SchemaFixture.getSchema();

    const rowModel = generator.generate(schema);

    expect(rowModel.columns).empty
  });

  it('generate should return columns when given a schema with field with register generator type', () => {
    const nameGenerator = new NameFieldGenerator();
    generator.register(nameGenerator)
    const schema = SchemaFixture.getSchema({type: nameGenerator.type});

    const rowModel = generator.generate(schema);

    expect(rowModel.columns).not.empty
  });


  it('generate should return columns when given a schema with field with register generator type', () => {
    const schema = SchemaFixture.getSchema({type: 'imaginary'});

    const rowModel = generator.generate(schema);

    expect(rowModel.columns).empty
  });
})
