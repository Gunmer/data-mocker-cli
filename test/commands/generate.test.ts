import { expect, test } from '@oclif/test'

describe('generate', () => {
  test
    .stdout()
    .command(['generate', '10', '-h'])
    .it('runs generate help', ctx => {
      expect(ctx.stdout).to.contain('Generate a file with mock data in json, csv or sql insert format')
    })

  test
    .stdout()
    .command(['generate', '10', '--schema', './test/resources/demo-schema.json'])
    .it('runs generate --schema demo-schema.json', ctx => {
      expect(ctx.stdout).to.contain('Output file')
    })

  test
    .stdout()
    .command(['generate', '10', '--schema', './test/resources/demo-schema.txt'])
    .it('runs generate --schema demo-schema.txt', ctx => {
      expect(ctx.stdout).to.contain('Invalid file extension, the schema must be JSON')
    })

  test
    .stdout()
    .command(['generate', '10', '--schema', './test/resources/fake.json'])
    .it('runs generate --schema fake.json', ctx => {
      expect(ctx.stdout).to.contain('File not found')
    })

  test
    .stdout()
    .command(['generate', '10', '--schema', './test/resources/wrong.json'])
    .it('runs generate -s wrong.json', ctx => {
      expect(ctx.stdout).to.contain('Invalid JSON format')
    })
})
