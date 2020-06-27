import { Command, flags } from '@oclif/command'
import { RowGenerator } from '../core/row.generator';
import { FileService } from '../core/services/file.service';
import { NameFieldGenerator } from '../name-field/name-field.generator';

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
      options: ['sql', 'json', 'csv']
    }),
  }

  private readonly fileService = new FileService()
  private readonly rowGenerator = new RowGenerator()

  async run() {
    try {
      const {args,flags} = this.parse(Generate)

      let schema = this.fileService.readJson(flags.schema);
      this.log(`Read schema...OK`)

      this.rowGenerator.registerGenerator(new NameFieldGenerator())
      this.log(`Register generators...OK`)

      let rows = Array.from(Array(args.number).keys())
        .map(() => this.rowGenerator.generate(schema))
      this.log(`Generated ${rows.length} data mock`)

      let outputFile = this.fileService.writeJson(rows);

      this.log(`Output file: ${outputFile}`)
    } catch (e) {
      this.log(e.message)
    }
  }
}
