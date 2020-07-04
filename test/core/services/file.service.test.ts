import { expect } from '@oclif/test';
import { FileNotFoundException } from '../../../src/core/exceptions/file-not-found.exception';
import { FileService } from '../../../src/core/services/file.service';

describe('FileService', () => {
  const service = new FileService()

  it('should create error.json file', () => {
    const result = service.writeErrorLog(new FileNotFoundException())

    expect(result).to.contain('error.json')
  })

  it('should create result.sql file', () => {
    const result = service.writeSql([])

    expect(result).to.contain('result.sql')
  })
})
