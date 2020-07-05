import { FieldGenerator } from '../../core/field.generator';
import { ColumnModel } from '../../core/models/column.model';
import { PhoneFieldModel } from './phone-field.model';

export class PhoneFieldGenerator extends FieldGenerator<PhoneFieldModel, string> {
  type = 'Phone'

  generate(field: PhoneFieldModel): ColumnModel<string> {
    const columnWithUndefined = this.generateColumnWithUndefined(field);
    if (columnWithUndefined) {
      return columnWithUndefined
    }

    const prefix = field.prefix ?? ''
    const pattern = field.pattern ?? 'ddddddddd'

    let phone = `${prefix} ${pattern}`

    do {
      const digit = this.randomService.randomBetween(0,9)
      phone = phone.replace('d', `${digit}`)
    } while (phone.includes('d'))

    return {key: field.name, value: phone}
  }

}
