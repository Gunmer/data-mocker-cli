import * as fs from 'fs-extra';
import * as path from 'path';
import { FileNotFoundException } from '../exceptions/file-not-found.exception';
import { InvalidFileExtensionException } from '../exceptions/invalid-file-extension.exception';
import { InvalidJsonFormatException } from '../exceptions/invalid-json-format.exception';
import { RowModel } from '../row.model';
import { SchemaModel } from '../schema.model';

export class FileService {
  private readonly validExtensions = ['.json', '.JSON']

  readJson(pathFile: string): SchemaModel {
    const fileNotFound = !fs.existsSync(pathFile);
    if (fileNotFound) {
      throw new FileNotFoundException()
    }

    const hasValidExtension = !this.validExtensions.some(e => pathFile.endsWith(e));
    if (hasValidExtension) {
      throw new InvalidFileExtensionException()
    }

    try {
      return fs.readJSONSync(pathFile, {encoding: 'utf-8'});
    }catch (e) {
      throw new InvalidJsonFormatException(e.message)
    }
  }

  writeJson(rows: RowModel[]): string {
    const jsonArray = rows.map(row => {
      const object: any = {}
      for (const column of row.columns) {
        object[column.key] = column.value
      }
      return object
    })

    const resultPath = path.join(process.cwd(), 'result.json');

    fs.writeJSONSync(resultPath, jsonArray, {encoding: 'utf-8', spaces: 2})
    return resultPath
  }

  writeErrorLog(error: Error): string {
    const errorLogPath = path.join(process.cwd(), 'error.json');
    fs.writeJSONSync(errorLogPath, error, {encoding: 'utf-8', spaces: 2})
    return errorLogPath
  }

}
