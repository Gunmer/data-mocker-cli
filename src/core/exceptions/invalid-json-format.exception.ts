import { BaseException } from './base.exception';

export class InvalidJsonFormatException extends BaseException {
  constructor(reason: string) {
    super(`Invalid JSON format [${reason}]`);
  }
}
