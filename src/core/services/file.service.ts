import * as fs from 'fs';
import * as path from 'path';
import { FileNotFoundException } from '../exceptions/file-not-found.exception';
import { InvalidFileExtensionException } from '../exceptions/invalid-file-extension.exception';
import { InvalidJsonFormatException } from '../exceptions/invalid-json-format.exception';
import { RowModel } from '../models/row.model';
import { SchemaModel } from '../models/schema.model';
import { StringService } from './string.service';

export class FileService {
  private readonly validExtensions = ['.json', '.JSON']
  private readonly stringService = new StringService()

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
      const schema = fs.readFileSync(pathFile, {encoding: 'utf-8'});
      return JSON.parse(schema);
    }catch (e) {
      throw new InvalidJsonFormatException(e.message)
    }
  }

  writeJson(rows: RowModel[]): string {
    const jsonArray = rows.map(row => {
      const object: any = {}
      for (const column of row.columns) {
        const key = this.stringService.formatCamelCase(column.key);
        object[key] = column.value
      }
      return object
    })

    const resultPath = path.join(process.cwd(), 'result.json');

    fs.writeFileSync(resultPath, JSON.stringify(jsonArray, null, 2), {encoding: 'utf-8'})
    return resultPath
  }

  writeErrorLog(error: Error): string {
    const errorLogPath = path.join(process.cwd(), 'error.json');
    fs.writeFileSync(errorLogPath, JSON.stringify(error, null, 2), {encoding: 'utf-8'})
    return errorLogPath
  }

  writeSql(rows: RowModel[]): string {
    return 'result.sql'
  }

  writeCsv(rows: RowModel[]): string {
    return 'result.csv'
  }
}

interface SqlComponents {
  columns: string[];
  values: string[];
}
