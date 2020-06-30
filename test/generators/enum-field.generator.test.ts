import { expect } from '@oclif/test';
import { EmptySourceException } from '../../src/generators/enum-field/empty-source.exception';
import { EnumFieldGenerator } from '../../src/generators/enum-field/enum-field.generator';

describe('NameFieldGenerator', () => {
  const generator = new EnumFieldGenerator();
  const type = generator.type

  it('should be generate any item from specific source', () => {
    const source = ['red', 'blue', 'green', 'black', 'white']
    const name = 'color'
    const result = generator.generate({type, name, source});

    expect(result.key).equal(name)
    expect(source).contains(result.value)
  })

  it('should generate null value sometimes', () => {
    const source = ['red', 'blue', 'green', 'black', 'white']
    const name = 'color'
    const isNullable = true

    const results = Array.from(Array(20).keys())
      .map(() => generator.generate({type, name, source, isNullable}))

    expect(results.every(r => r.key === name)).true
    expect(results.some(r => !r.value)).true
    expect(results.some(r => r.value)).true
  })

  it('should be throw EmptySourceException when source is empty', () => {
    const source: string[] = []
    const name = 'color'

    expect(() => {
      generator.generate({type, name, source})
    }).to.throws(EmptySourceException, `The source of field ${name} could not be empty`)
  })

})
