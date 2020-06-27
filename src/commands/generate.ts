import { Command, flags } from '@oclif/command'
import { FileService } from '../core/file.service';
import { RowGenerator } from '../core/row.generator';
import { NameFieldGenerator } from '../name-field/name-field.generator';

export default class Generate extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    schema: flags.string({
      char: 's',
      description: 'SchemaModel of the data to be generated',
      required: true
    }),
    output: flags.string({
      char: 'o',
      description: 'Output file format',
      required: false,
      options: ['sql', 'json', 'csv']
    }),
  }

  private readonly fileService = new FileService()
  private readonly rowGenerator = new RowGenerator()

  async run() {
    try {
      const {flags} = this.parse(Generate)

      let schema = this.fileService.readJson(flags.schema);
      this.log(`Read schema...OK`)

      this.rowGenerator.registerGenerator(new NameFieldGenerator())
      this.log(`Register generators...OK`)

      let rowModel = this.rowGenerator.generate(schema);
      let object: any = {}

      for (let column of rowModel.columns) {
        object[column.key] = column.value
      }

      this.log(`Row generated: ${JSON.stringify(object)}`)

      this.log(`OK`)
    } catch (e) {
      this.log(e.message)
    }
  }
}
