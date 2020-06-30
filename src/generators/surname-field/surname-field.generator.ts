import { FieldGenerator } from '../../core/field.generator';
import { ColumnModel } from '../../core/row.model'
import { NameFieldModel } from '../name-field/name-field.model'
import { SurnameFieldModel } from './surname-field.model'
import { SurnameFieldSource } from './surname-field.source'

export class SurnameFieldGenerator extends FieldGenerator<NameFieldModel, string> {
  type = 'Surname'

  generate(field: SurnameFieldModel): ColumnModel<string> {
    const columnWithUndefined = this.generateColumnWithUndefined(field);
    if (columnWithUndefined) {
      return columnWithUndefined
    }

    const names = field.source ?? SurnameFieldSource.source;
    const item = this.randomService.randomItem(names);

    return {key: field.name, value: item}
  }

}
