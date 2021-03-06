import { Command, flags } from '@oclif/command'
import cli from 'cli-ux'
import * as Listr from 'listr'
import { ListrTaskWrapper } from 'listr'
import { RowGenerator } from '../core/row.generator'
import { FileService } from '../core/services/file.service'
import { EmailFieldGenerator } from '../generators/email-field/email-field.generator';
import { EnumFieldGenerator } from '../generators/enum-field/enum-field.generator';
import { NameFieldGenerator } from '../generators/name-field/name-field.generator'
import { NumberFieldGenerator } from '../generators/number-field/number-field.generator';
import { PhoneFieldGenerator } from '../generators/phone-field/phone-field.generator';
import { StringFieldGenerator } from '../generators/string-field/string-field.generator';
import { SurnameFieldGenerator } from '../generators/surname-field/surname-field.generator'

// noinspection JSUnusedGlobalSymbols
export default class Generate extends Command {
  static description = 'Generate a file with mock data in json, csv or sql insert format'

  static args = [
    {
      name: 'number',
      description: 'Number of mock data',
      required: true,
      parse: (input: any) => Number(input)
    }
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    schema: flags.string({
      char: 's',
      description: 'Schema of the data to be generated',
      required: true
    }),
    output: flags.string({
      char: 'o',
      description: 'Output file format',
      required: false,
      options: ['sql', 'json', 'csv'],
      default: 'json'
    }),
  }

  private readonly fileService = new FileService()
  private readonly rowGenerator = new RowGenerator()

  async run() {
    cli.action.start('Generating file')
    const ctx = this.parse(Generate)

    const tasks = new Listr();
    tasks.add(this.registerGeneratorsTask())
    tasks.add(this.readSchemaTask())
    tasks.add(this.generateMockDataTask())
    tasks.add(this.generateFileTask())

    await tasks.run(ctx).catch(reason => {
      const logFile = this.fileService.writeErrorLog(reason);
      this.log(`Oops an error has occurred, for more details see: ${logFile}`)
    })
    cli.action.stop()
  }

  private registerGeneratorsTask(): Listr.ListrTask {
    return {
      title: 'Register generators',
      task: async (ctx: any, task: ListrTaskWrapper) => {
        const generatorNumber = this.rowGenerator
          .register(new NameFieldGenerator())
          .register(new SurnameFieldGenerator())
          .register(new NumberFieldGenerator())
          .register(new EnumFieldGenerator())
          .register(new StringFieldGenerator())
          .register(new EmailFieldGenerator())
          .register(new PhoneFieldGenerator())
          .count();
        task.output = `Register ${generatorNumber} generators`
      }
    }
  }

  private readSchemaTask(): Listr.ListrTask {
    return {
      title: 'Read schema',
      task: async (ctx: any) => {
        ctx.schema = this.fileService.readJson(ctx.flags.schema)
      }
    }
  }

  private generateMockDataTask(): Listr.ListrTask {
    return {
      title: 'Generate data mocked',
      task: async (ctx: any, task: ListrTaskWrapper) => {
        ctx.rows = Array.from(Array(ctx.args.number).keys())
          .map(() => this.rowGenerator.generate(ctx.schema))
        task.title = `Generate ${ctx.rows.length} data mocked`
      }
    }
  }

  private generateFileTask(): Listr.ListrTask {
    return {
      title: 'Generate File',
      task: async (ctx: any, task: ListrTaskWrapper) => {
        switch (ctx.flags.output) {
          case 'json':
            ctx.outputFile = this.fileService.writeJson(ctx.rows, ctx.schema.nameFormatter)
            break
          case 'sql':
            ctx.outputFile = this.fileService.writeSql(ctx.rows, ctx.schema.tableName, ctx.schema.nameFormatter)
            break
          case 'csv':
            ctx.outputFile = this.fileService.writeCsv(ctx.rows, ctx.schema.nameFormatter)
            break
        }

        task.title = `Generate File: ${ctx.outputFile}`
      }
    }
  }

}
