import { FieldGenerator } from '../../core/field.generator'
import { ColumnModel } from '../../core/models/column.model'
import { EmailFieldModel } from './email-field.model'
import { EmailFieldSource } from './email-field.source'

export class EmailFieldGenerator extends FieldGenerator<EmailFieldModel, string> {
  type = 'Email'

  generate(field: EmailFieldModel): ColumnModel<string> {
    const columnWithUndefined = this.generateColumnWithUndefined(field)
    if (columnWithUndefined) {
      return columnWithUndefined
    }

    const userNames = field.userNames ?? EmailFieldSource.userNames
    const domains = field.domains ?? EmailFieldSource.domains

    const userName = this.randomService.randomItem(userNames)
    const domain = this.randomService.randomItem(domains)
    const number = this.randomService.randomBetween(0, 999);

    const email = `${userName}${number}@${domain}`

    return {key: field.name, value: email}
  }

}
