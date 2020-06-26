import { expect, test } from '@oclif/test'

describe('generate', () => {
  test
    .stdout()
    .command(['generate', '-h'])
    .it('runs generate help', ctx => {
      expect(ctx.stdout).to.contain('describe the command here')
    })

  test
    .stdout()
    .command(['generate', '--schema', './test/resources/demo-schema.json'])
    .it('runs generate --schema demo-schema.json', ctx => {
      expect(ctx.stdout).to.contain('OK')
    })

  test
    .stdout()
    .command(['generate', '--schema', './test/resources/demo-schema.txt'])
    .it('runs generate --schema demo-schema.txt', ctx => {
      expect(ctx.stdout).to.contain('Invalid file extension, the schema must be JSON')
    })

  test
    .stdout()
    .command(['generate', '--schema', './test/resources/fake.json'])
    .it('runs generate --schema fake.json', ctx => {
      expect(ctx.stdout).to.contain('File not found')
    })

  test
    .stdout()
    .command(['generate', '--schema', './test/resources/wrong.json'])
    .it('runs generate -s wrong.json', ctx => {
      expect(ctx.stdout).to.contain('Invalid JSON format')
    })
})
