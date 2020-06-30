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
})
