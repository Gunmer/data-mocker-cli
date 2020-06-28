export class RandomService {

  randomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  randomIndex(size: number): number {
    return this.randomBetween(1, size) - 1;
  }

  randomItem<T>(array: T[]): T {
    const index = this.randomIndex(array.length);
    return array[index]
  }

}
