import { expect } from '@oclif/test';
import { StringService } from '../../../src/core/services/string.service';

describe('StringService', () => {
  const service = new StringService()

  it('formatCamelCase should return a string with lower camel case', () => {
    const result = service.formatCamelCase('lorem ipsum');
    expect(result).equal('loremIpsum')
  })

})
