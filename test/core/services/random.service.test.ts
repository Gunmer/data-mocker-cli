import { expect } from '@oclif/test';
import { RandomService } from '../../../src/core/services/random.service';

describe('RandomService', () => {
  const service = new RandomService()

  it('randomBetween should return an number greater that 1 and less tha 5', () => {
    const result = service.randomBetween(2, 4)
    expect(result).greaterThan(1).lessThan(5)
  })

  it('randomIndex should return number greater or equals that 0 and less that size', () => {
    const result = service.randomIndex(5)
    expect(result).greaterThan(-1).lessThan(5)
  })

  it('randomItem should return an item of array', () => {
    const array = ['1', '2', '3']
    const result = service.randomItem(array)
    expect(array).contain(result)
  })

  it('randomNull should return null 25% of the time', () => {
    const total = 100000
    const trueResults = Array.from(Array(total).keys())
      .map(() => service.randomNull())
      .filter(r => r)
      .length
    const percentage = ((trueResults/total) * 100).toFixed(0)

    expect(percentage).equal("25")
  })

})
