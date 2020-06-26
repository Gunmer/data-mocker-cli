import * as fs from 'fs-extra';
import { FileNotFoundException } from './exceptions/file-not-found.exception';
import { InvalidFileExtensionException } from './exceptions/invalid-file-extension.exception';
import { InvalidJsonFormatException } from './exceptions/invalid-json-format.exception';
import { SchemaModel } from './schema.model';

export class FileService {
  private readonly validExtensions = ['.json', '.JSON']

  readJson(pathFile: string): SchemaModel {
    let fileNotFound = !fs.existsSync(pathFile);
    if (fileNotFound) {
      throw new FileNotFoundException()
    }

    let hasValidExtension = !this.validExtensions.some(e => pathFile.endsWith(e));
    if (hasValidExtension) {
      throw new InvalidFileExtensionException()
    }

    try {
      return fs.readJSONSync(pathFile, {encoding: 'utf-8'});
    }catch (e) {
      throw new InvalidJsonFormatException(e.message)
    }
  }

}
