import { expect } from '@oclif/test';
import { EmailFieldGenerator } from '../../src/generators/email-field/email-field.generator';
import { EmailFieldSource } from '../../src/generators/email-field/email-field.source';

describe('EmailFieldGenerator', () => {
  const generator = new EmailFieldGenerator();
  const type = generator.type

  it('should be generate any item from default source', () => {
    const name = 'email'
    const result = generator.generate({type, name});

    const [userName, domain] = result.value?.split('@') ?? []

    expect(result.key).to.equal(name)
    expect(result.value).to.not.undefined
    expect(userName).to.not.undefined
    expect(domain).to.not.undefined
    expect(EmailFieldSource.domains).to.contain(domain)

  })

  it('should be generate any item from specific source', () => {
    const name = 'email'
    const userNames = ['csosaur', 'cristiam.sosa']
    const domains = ['private.es']
    const result = generator.generate({type, name, userNames, domains});

    const [userName, domain] = result.value?.split('@') ?? []

    expect(result.key).to.equal(name)
    expect(result.value).to.not.undefined
    expect(userName).to.not.undefined
    expect(domain).to.not.undefined
    expect(domains).to.contain(domain)

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
