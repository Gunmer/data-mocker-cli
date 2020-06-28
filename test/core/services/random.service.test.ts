import { expect, test } from '@oclif/test';
import { RandomService } from '../../../src/core/services/random.service';

describe('RandomService', () => {
  let service = new RandomService()

  test.it('randomBetween', () => {
    let result = service.randomBetween(2, 4);
    expect(result).greaterThan(1).lessThan(5)
  })

  test.it('randomIndex', () => {
    let result = service.randomIndex(5);
    expect(result).greaterThan(-1).lessThan(5)
  })

  test.it('randomItem', () => {
    let array = ['1', '2', '3'];
    let result = service.randomItem(array);
    expect(array).contain(result)
  })

})
