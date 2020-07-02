import { expect } from '@oclif/test';
import { it } from "mocha";
import { StringFieldGenerator } from '../../src/generators/string-field/string-field.generator';

describe('StringFieldGenerator', () => {
  const generator = new StringFieldGenerator()
  const type = generator.type

  it('should generate a string with max 10 digits', () => {
    const name = 'string';
    const max = 10;

    const result = generator.generate({type, name, max});

    expect(result.key).to.equal(name)
    expect(result.value).not.undefined
    expect(result.value).to.length(10)
  });

  it('should generate null value sometimes', () => {
    const name = 'string'
    const max = 10;
    const isNullable = true

    const results = Array.from(Array(100).keys())
      .map(() => generator.generate({type, name, max, isNullable}))

    expect(results.every(r => r.key === name)).true
    expect(results.some(r => !r.value)).true
    expect(results.some(r => r.value)).true
  })

  it('should generate a string with length between min and max digits', () => {
    const name = 'number';
    const min = 5
    const max = 10

    const result = generator.generate({type, name, min, max});

    expect(result.key).equal(name)
    expect(result.value?.length).gte(min).lte(max)
  });

})
