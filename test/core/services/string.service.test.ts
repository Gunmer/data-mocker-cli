import { expect } from '@oclif/test';
import { StringService } from '../../../src/core/services/string.service';

describe('StringService', () => {
  let service = new StringService()

  it('formatCamelCase should return a string with lower camel case', () => {
    let result = service.formatCamelCase('lorem ipsum');
    expect(result).equal('loremIpsum')
  })

})
