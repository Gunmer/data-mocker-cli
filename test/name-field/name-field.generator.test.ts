import { expect } from '@oclif/test';
import { it } from 'mocha';
import { NameFieldGenerator } from '../../src/name-field/name-field.generator';
import { NameFieldSource } from '../../src/name-field/name-field.source';

describe('NameFieldGenerator', () => {
  const generator = new NameFieldGenerator();
  const type = generator.type

  it('should be generate any name from default source', () => {
    const name = 'fist name'

    const result = generator.generate({type, name});

    expect(result.key).equal(name)
    expect(NameFieldSource.source).contains(result.value)
  })

  it('should be generate any name from specific source', () => {
    const source = ['Miguel', 'Rosa']
    const name = 'fist name'
    const result = generator.generate({type, name, source});

    expect(result.key).equal(name)
    expect(source).contains(result.value)
  })

  it('should generate null value, 1 of 4', () => {
    const name = 'fist name'
    const isNullable = true

    const results = Array.from(Array(10).keys())
      .map(() => generator.generate({type, name, isNullable}))

    expect(results.every(r => r.key === name)).true
    expect(results.some(r => !r.value)).true
  })
})
