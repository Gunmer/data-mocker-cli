import { FieldGenerator } from '../../core/field.generator';
import { ColumnModel } from '../../core/row.model';
import { NumberFieldModel } from './number-field.model';

export class NumberFieldGenerator extends FieldGenerator<NumberFieldModel, number> {
  type = 'Number'

  generate(field: NumberFieldModel): ColumnModel<number> {
    const columnWithUndefined = this.generateColumnWithUndefined(field);
    if (columnWithUndefined) {
      return columnWithUndefined
    }

    const number = this.randomService.randomBetween(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

    return {key: field.name, value: number};
  }

}
