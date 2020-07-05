import { expect, test } from '@oclif/test'
import * as fs from 'fs'
import { FileNotFoundException } from '../../../src/core/exceptions/file-not-found.exception'
import { FileService } from '../../../src/core/services/file.service'

describe('FileService', () => {
  const service = new FileService()

  test
    .stub(fs, 'writeFileSync', () => {
    })
    .it('should create error.json file', () => {
      const result = service.writeErrorLog(new FileNotFoundException())

      expect(result).to.contain('error.json')
    })

  test
    .stub(fs, 'writeFileSync', () => {
    })
    .it('should create result.sql file', () => {
      const result = service.writeSql([])

      expect(result).to.contain('result.sql')
    })
})
