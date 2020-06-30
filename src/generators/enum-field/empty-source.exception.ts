import { BaseException } from '../../core/exceptions/base.exception';

export class EmptySourceException extends BaseException{
  constructor(fieldName: string) {
    super(`The source of field ${fieldName} could not be empty`);
  }
}
