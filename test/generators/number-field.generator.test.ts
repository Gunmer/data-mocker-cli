import { expect } from '@oclif/test';
import { it } from "mocha";
import { NumberFieldGenerator } from '../../src/generators/number-field/number-field.generator';

describe('NumberFieldGenerator', () => {
  const generator = new NumberFieldGenerator()
  const type = generator.type

  it('should generate a number', () => {
    const name = 'number';

    const result = generator.generate({type, name});

    expect(result.key).equal(name)
    expect(result.value).not.undefined
  });

  it('should generate null value sometimes', () => {
    const name = 'number'
    const isNullable = true

    const results = Array.from(Array(20).keys())
      .map(() => generator.generate({type, name, isNullable}))

    expect(results.every(r => r.key === name)).true
    expect(results.some(r => !r.value)).true
  })

  it('should generate a number between min and max', () => {
    const name = 'number';
    const min = 5
    const max = 10

    const result = generator.generate({type, name, min, max});

    expect(result.key).equal(name)
    expect(result.value).gte(min).lte(max)
  });

  it('should generate a number less that max', () => {
    const name = 'number';
    const max = 10

    const result = generator.generate({type, name, max});

    expect(result.key).equal(name)
    expect(result.value).lte(max)
  });

  it('should generate a number great that min', () => {
    const name = 'number';
    const min = 10

    const result = generator.generate({type, name, min});

    expect(result.key).equal(name)
    expect(result.value).gte(min)
  });
})
