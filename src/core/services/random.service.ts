export class RandomService {

  randomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  randomItem<T>(array: T[]): T {
    const index = this.randomBetween(0, array.length - 1);
    return array[index]
  }

  randomBoolean(percentTruly: number): boolean {
    const number = this.randomBetween(1, 100);
    return number <= percentTruly
  }
}
