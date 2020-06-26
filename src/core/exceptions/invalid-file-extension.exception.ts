import { BaseException } from './base.exception';

export class InvalidFileExtensionException extends BaseException {
  constructor() {
    super('Invalid file extension, the schema must be JSON');
  }
}
