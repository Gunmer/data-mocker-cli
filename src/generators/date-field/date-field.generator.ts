import * as moment from 'moment'
import { FieldGenerator } from '../../core/field.generator'
import { ColumnModel } from '../../core/models/column.model'
import { DateFieldModel } from './date-field.model'

export class DateFieldGenerator extends FieldGenerator<DateFieldModel, string> {
  type = 'Date'

  generate(field: DateFieldModel): ColumnModel<string> {
    const columnWithUndefined = this.generateColumnWithUndefined(field)
    if (columnWithUndefined) {
      return columnWithUndefined
    }

    const isNow = !field.min && !field.max

    if (isNow) {
      const now = moment().format(field.pattern)
      return {key: field.name, value: now}
    }

    const min = field.min ? moment(field.min, field.pattern).valueOf() : 0
    const max = field.max ? moment(field.max, field.pattern).valueOf() : Number.MAX_SAFE_INTEGER

    const milliseconds = this.randomService.randomBetween(min, max)
    const date = moment(milliseconds).format(field.pattern)

    return {key: field.name, value: date}
  }

}
