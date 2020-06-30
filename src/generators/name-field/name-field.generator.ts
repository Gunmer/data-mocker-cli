import { FieldGenerator } from '../../core/field.generator';
import { ColumnModel } from '../../core/row.model';
import { RandomService } from '../../core/services/random.service';
import { NameFieldModel } from './name-field.model';
import { NameFieldSource } from './name-field.source';

export class NameFieldGenerator implements FieldGenerator<NameFieldModel, string>{
  private readonly randomService = new RandomService()

  type = 'Name'

  generate(field: NameFieldModel): ColumnModel<string> {
    const isNullable = field.isNullable ?? false;
    if (isNullable && this.randomService.randomNull()) {
      return {key: field.name, value: undefined}
    }

    const names = field.source ?? NameFieldSource.source;
    const item = this.randomService.randomItem(names);
    return {key: field.name, value: item}
  }

}
