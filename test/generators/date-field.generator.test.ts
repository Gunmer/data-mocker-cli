import { expect } from '@oclif/test'
import * as moment from 'moment'
import { DateFieldGenerator } from '../../src/generators/date-field/date-field.generator'

describe('DateFieldGenerator', () => {
  const generator = new DateFieldGenerator();
  const type = generator.type

  it('should be generate now date', () => {
    const name = 'date'
    const pattern = 'DD-MM-yyyy'

    const result = generator.generate({name, type, pattern})

    expect(result.key).to.equal(name)
    expect(result.value).to.not.undefined
    expect(result.value?.split('-')).to.length(3)
  })

  it('should generate null value sometimes', () => {
    const name = 'date'
    const pattern = 'DD-MM-yyyy'
    const isNullable = true

    const results = Array.from(Array(100).keys())
      .map(() => generator.generate({type, name, isNullable, pattern}))

    expect(results.every(r => r.key === name)).true
    expect(results.some(r => !r.value)).true
    expect(results.some(r => r.value)).true
  })

  it('should be generate any date', () => {
    const name = 'date'
    const pattern = 'DD-MM-yyyy'

    const result = generator.generate({name, type, pattern})

    expect(result.key).to.equal(name)
    expect(result.value).to.not.undefined
    expect(result.value?.split('-')).to.length(3)
  })

  it('should be generate any date between min and max', () => {
    const name = 'date'
    const pattern = 'DD-MM-yyyy'
    const min = '01-01-2000'
    const max = '01-01-2002'

    const result = generator.generate({name, type, pattern, min, max})

    expect(result.key).to.equal(name)
    expect(result.value).to.not.undefined
    expect(result.value?.split('-')).to.length(3)
    expect(moment(result.value, pattern).valueOf())
      .to.gte(moment(min, pattern).valueOf())
      .and.lt(moment(max, pattern).valueOf())
  })

  it('should be generate any date great tha min', () => {
    const name = 'date'
    const pattern = 'DD-MM-yyyy'
    const min = '01-01-2000'

    const result = generator.generate({name, type, pattern, min})

    expect(result.key).to.equal(name)
    expect(result.value).to.not.undefined
    expect(result.value?.split('-')).to.length(3)
    expect(moment(result.value, pattern).valueOf())
      .to.gte(moment(min, pattern).valueOf())
  })

  it('should be generate any date less than max', () => {
    const name = 'date'
    const pattern = 'DD-MM-yyyy'
    const max = '01-01-2002'

    const result = generator.generate({name, type, pattern, max})

    expect(result.key).to.equal(name)
    expect(result.value).to.not.undefined
    expect(result.value?.split('-')).to.length(3)
    expect(moment(result.value, pattern).valueOf())
      .and.lt(moment(max, pattern).valueOf())
  })

})
