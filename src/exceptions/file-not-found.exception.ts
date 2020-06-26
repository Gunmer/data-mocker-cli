import { BaseException } from './base.exception';

export class FileNotFoundException extends BaseException {
  constructor() {
    super('File not found');
  }
}
