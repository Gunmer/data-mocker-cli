import { FieldGenerator } from '../../core/field.generator';
import { ColumnModel } from '../../core/row.model'
import { RandomService } from '../../core/services/random.service'
import { NameFieldModel } from '../name-field/name-field.model'
import { SurnameFieldModel } from './surname-field.model'
import { SurnameFieldSource } from './surname-field.source'

export class SurnameFieldGenerator implements FieldGenerator<NameFieldModel, string> {
  private readonly randomService = new RandomService()

  type = 'Surname'

  generate(field: SurnameFieldModel): ColumnModel<string> {
    const isNullable = field.isNullable ?? false;
    if (isNullable && this.randomService.randomNull()) {
      return {key: field.name, value: undefined}
    }

    const names = field.source ?? SurnameFieldSource.source;
    const item = this.randomService.randomItem(names);
    return {key: field.name, value: item}
  }

}
