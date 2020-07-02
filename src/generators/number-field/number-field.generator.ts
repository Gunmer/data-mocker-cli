import { FieldGenerator } from '../../core/field.generator';
import { ColumnModel } from '../../core/models/column.model';
import { NumberFieldModel } from './number-field.model';

export class NumberFieldGenerator extends FieldGenerator<NumberFieldModel, number> {
  type = 'Number'

  generate(field: NumberFieldModel): ColumnModel<number> {
    const columnWithUndefined = this.generateColumnWithUndefined(field);
    if (columnWithUndefined) {
      return columnWithUndefined
    }

    const min = field.min ?? Number.MIN_SAFE_INTEGER
    const max = field.max ?? Number.MAX_SAFE_INTEGER
    const number = this.randomService.randomBetween(min, max);

    return {key: field.name, value: number};
  }

}
