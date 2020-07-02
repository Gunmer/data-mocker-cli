import { expect, test } from '@oclif/test'

describe('generate', () => {

  test
    .stdout()
    .command(['generate', '10', '-s', './test/resources/demo-schema.json'])
    .it('should generate file when schema is correct', ctx => {
      expect(ctx.stdout).to.contain('Register generators')
      expect(ctx.stdout).to.contain('Read schema')
      expect(ctx.stdout).to.contain('Generate 10 data mocked')
      expect(ctx.stdout).to.contain('Generate File:')
      expect(ctx.stdout).to.contain('result.json')
    })

  test
    .stdout()
    .command(['generate', '10', '-s', './test/resources/demo-schema.json', '-o', 'sql'])
    .it('should generate file when schema is correct', ctx => {
      expect(ctx.stdout).to.contain('result.sql')
    })

  test
    .stdout()
    .command(['generate', '10', '-s', './test/resources/demo-schema.json', '-o', 'csv'])
    .it('should generate file when schema is correct', ctx => {
      expect(ctx.stdout).to.contain('result.csv')
    })

  test
    .stdout()
    .command(['generate', '10', '-s', './test/resources/demo-schema.txt'])
    .it('should be show error when schema is not json file', ctx => {
      expect(ctx.stdout).to.contain('Invalid file extension, the schema must be JSON')
    })

  test
    .stdout()
    .command(['generate', '10', '-s', './test/resources/fake.json'])
    .it('should be show error when schema not found', ctx => {
      expect(ctx.stdout).to.contain('File not found')
    })

  test
    .stdout()
    .command(['generate', '10', '--schema', './test/resources/wrong.json'])
    .it('should be show error when schema is not valid json format', ctx => {
      expect(ctx.stdout).to.contain('Invalid JSON format')
    })
})
