import { Command, flags } from '@oclif/command'
import { FileService } from '../core/file.service';

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

  private fileService = new FileService()

  async run() {
    try {
      const {flags} = this.parse(Generate)
      let schema = this.fileService.readJson(flags.schema);
      this.log(`JSON: ${JSON.stringify(schema)}`)
      this.log(`OK`)
    } catch (e) {
      this.log(e.message)
    }
  }
}
