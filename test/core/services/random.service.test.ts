import { expect } from '@oclif/test';
import { RandomService } from '../../../src/core/services/random.service';

describe('RandomService', () => {
  let service = new RandomService()

  it('randomBetween should return an number greater that 1 and less tha 5', () => {
    let result = service.randomBetween(2, 4);
    expect(result).greaterThan(1).lessThan(5)
  })

  it('randomIndex should return number greater or equals that 0 and less that size', () => {
    let result = service.randomIndex(5);
    expect(result).greaterThan(-1).lessThan(5)
  })

  it('randomItem should return an item of array', () => {
    let array = ['1', '2', '3'];
    let result = service.randomItem(array);
    expect(array).contain(result)
  })

})
