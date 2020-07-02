import { FieldGenerator } from '../../core/field.generator';
import { ColumnModel } from '../../core/models/column.model';
import { NameFieldModel } from './name-field.model';
import { NameFieldSource } from './name-field.source';

export class NameFieldGenerator extends FieldGenerator<NameFieldModel, string> {
  type = 'Name'

  generate(field: NameFieldModel): ColumnModel<string> {
    const columnWithUndefined = this.generateColumnWithUndefined(field);
    if (columnWithUndefined) {
      return columnWithUndefined
    }

    const names = field.source ?? NameFieldSource.source;
    const item = this.randomService.randomItem(names);

    return {key: field.name, value: item}
  }

}
