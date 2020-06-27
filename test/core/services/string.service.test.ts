import { expect, test } from '@oclif/test';
import { StringService } from '../../../src/core/services/string.service';

describe('StringService', () => {
  let service = new StringService()

  test.it('formatCamelCase with all lower case', () => {
    let result = service.formatCamelCase('lorem ipsum');
    expect(result).equal('loremIpsum')
  })

})
