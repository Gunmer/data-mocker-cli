import {Command, flags} from '@oclif/command'

export default class Generate extends Command {
  static description = 'describe the command here'

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

  async run() {
    const {args, flags} = this.parse(Generate)
    this.log(`Schema: ${flags.schema}`)
    this.log(`Output: ${flags.output}`)
  }
}
