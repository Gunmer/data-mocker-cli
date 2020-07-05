import { expect } from '@oclif/test';
import { PhoneFieldGenerator } from '../../src/generators/phone-field/phone-field.generator';

describe('PhoneFieldGenerator', () => {
  const generator = new PhoneFieldGenerator()
  const type = generator.type

  it('should be generate a phone number', () => {
    const name = 'phone'
    const result = generator.generate({type, name})

    expect(result.key).to.equal(name)
    expect(result.value).to.not.undefined
    expect(result.value).to.not.contain('d')

  })

  it('should be generate a phone number with prefix', () => {
    const name = 'phone'
    const prefix = '+34'
    const result = generator.generate({type, name, prefix})

    expect(result.key).to.equal(name)
    expect(result.value?.startsWith(prefix)).to.true

  })

  it('should be generate a phone number with prefix', () => {
    const name = 'phone'
    const pattern = '6dd-ddd-ddd'
    const result = generator.generate({type, name, pattern})

    expect(result.key).to.equal(name)
    expect(result.value?.startsWith('6')).to.true
    expect(result.value).to.match(/\d\d\d-\d\d\d-\d\d\d/)

  })

  it('should generate null value sometimes', () => {
    const name = 'email'
    const isNullable = true

    const results = Array.from(Array(100).keys())
      .map(() => generator.generate({type, name, isNullable}))

    expect(results.every(r => r.key === name)).true
    expect(results.some(r => !r.value)).true
    expect(results.some(r => r.value)).true
  })

})
