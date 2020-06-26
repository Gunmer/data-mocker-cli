export abstract class BaseException {
  readonly message: string

  constructor(message: string) {
    this.message = message
  }
}
