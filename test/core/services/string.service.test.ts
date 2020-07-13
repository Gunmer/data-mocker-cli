import { expect } from '@oclif/test';
import { NameFormatter } from '../../../src/core/models/name-formatter';
import { StringService } from '../../../src/core/services/string.service';

describe('StringService', () => {
  const service = new StringService()

  it('formatLowerCamelCase should return a string with lower camel case', () => {
    const result = service.formatLowerCamelCase('lorem ipsum');
    expect(result).equal('loremIpsum')
  })

  it('formatUpperCamelCase should return a string with upper camel case', () => {
    const result = service.formatUpperCamelCase('lorem ipsum');
    expect(result).equal('LoremIpsum')
  })

  it('formatLowerKebabCase should return a string with lower kebab case', () => {
    const result = service.formatLowerKebabCase('lorem ipsum');
    expect(result).equal('lorem-ipsum')
  })

  it('formatUpperKebabCase should return a string with upper kebab case', () => {
    const result = service.formatUpperKebabCase('lorem ipsum');
    expect(result).equal('Lorem-Ipsum')
  })

  it('formatLowerSnakeCase should return a string with lower snake case', () => {
    const result = service.formatLowerSnakeCase('lorem ipsum');
    expect(result).equal('lorem_ipsum')
  })

  it('formatUpperSnakeCase should return a string with upper snake case', () => {
    const result = service.formatUpperSnakeCase('lorem ipsum');
    expect(result).equal('Lorem_Ipsum')
  })

  it('formatString should format text by NameFormatter ', () => {
    expect(service.formatString('lorem ipsum', NameFormatter.LowerCamelCase)).to.equal('loremIpsum')
    expect(service.formatString('lorem ipsum', NameFormatter.UpperCamelCase)).to.equal('LoremIpsum')
    expect(service.formatString('lorem ipsum', NameFormatter.LowerKebabCase)).to.equal('lorem-ipsum')
    expect(service.formatString('lorem ipsum', NameFormatter.UpperKebabCase)).to.equal('Lorem-Ipsum')
    expect(service.formatString('lorem ipsum', NameFormatter.LowerSnakeCase)).to.equal('lorem_ipsum')
    expect(service.formatString('lorem ipsum', NameFormatter.UpperSnakeCase)).to.equal('Lorem_Ipsum')
    expect(service.formatString('lorem ipsum', NameFormatter.WithoutFormat)).to.equal('lorem ipsum')
  })

  it('formatString should format text by default ', () => {
    expect(service.formatString('lorem ipsum')).to.equal('loremIpsum')
  })

})
