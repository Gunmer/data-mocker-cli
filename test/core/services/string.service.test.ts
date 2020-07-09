import { expect } from '@oclif/test';
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

})
