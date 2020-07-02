import { expect } from '@oclif/test';
import { it } from 'mocha';
import { SurnameFieldGenerator } from '../../src/generators/surname-field/surname-field.generator';
import { SurnameFieldSource } from '../../src/generators/surname-field/surname-field.source';

describe('SurnameFieldGenerator', () => {
  const generator = new SurnameFieldGenerator();
  const type = generator.type

  it('should be generate any name from default source', () => {
    const name = 'last name'

    const result = generator.generate({type, name});

    expect(result.key).equal(name)
    expect(SurnameFieldSource.source).contains(result.value)
  })

  it('should be generate any name from specific source', () => {
    const source = ['Sosa', 'Gil']
    const name = 'last name'
    const result = generator.generate({type, name, source});

    expect(result.key).equal(name)
    expect(source).contains(result.value)
  })

  it('should generate null value sometimes', () => {
    const name = 'last name'
    const isNullable = true

    const results = Array.from(Array(100).keys())
      .map(() => generator.generate({type, name, isNullable}))

    expect(results.every(r => r.key === name)).true
    expect(results.some(r => !r.value)).true
    expect(results.some(r => r.value)).true
  })
})
