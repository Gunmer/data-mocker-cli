import { expect } from '@oclif/test';
import { RandomService } from '../../../src/core/services/random.service';

describe('RandomService', () => {
  const service = new RandomService()

  it('randomBetween should return an number greater that 1 and less tha 5', () => {
    const result = service.randomBetween(2, 4)
    expect(result).greaterThan(1).lessThan(5)
  })

  it('randomItem should return an item of array', () => {
    const array = ['1', '2', '3']
    const result = service.randomItem(array)
    expect(array).contain(result)
  })

  it('randomBoolean should return true 25% of the time', () => {
    const total = 100000
    const trueResults = Array.from(Array(total).keys())
      .map(() => service.randomBoolean(25))
      .filter(r => r)
      .length
    const percentage = ((trueResults/total) * 100).toFixed(0)

    expect(percentage).equal("25")
  })

  it('randomBoolean should return true 50% of the time', () => {
    const total = 100000
    const trueResults = Array.from(Array(total).keys())
      .map(() => service.randomBoolean(50))
      .filter(r => r)
      .length
    const percentage = ((trueResults/total) * 100).toFixed(0)

    expect(percentage).equal("50")
  })

  it('randomBoolean should return true 75% of the time', () => {
    const total = 100000
    const trueResults = Array.from(Array(total).keys())
      .map(() => service.randomBoolean(75))
      .filter(r => r)
      .length
    const percentage = ((trueResults/total) * 100).toFixed(0)

    expect(percentage).equal("75")
  })

  it('randomBoolean should return true 0% of the time', () => {
    const total = 100000
    const trueResults = Array.from(Array(total).keys())
      .map(() => service.randomBoolean(0))
      .filter(r => r)
      .length
    const percentage = ((trueResults/total) * 100).toFixed(0)

    expect(percentage).equal("0")
  })

  it('randomBoolean should return true 100% of the time', () => {
    const total = 100000
    const trueResults = Array.from(Array(total).keys())
      .map(() => service.randomBoolean(100))
      .filter(r => r)
      .length
    const percentage = ((trueResults/total) * 100).toFixed(0)

    expect(percentage).equal("100")
  })

})
