import { FieldGenerator } from '../../core/field.generator';
import { ColumnModel } from '../../core/row.model';
import { StringFieldModel } from './string-field.model';
import { StringFieldSource } from './string-field.source';

export class StringFieldGenerator extends FieldGenerator<StringFieldModel, string> {
  type = 'String'

  generate(field: StringFieldModel): ColumnModel<string> {
    const columnWithUndefined = this.generateColumnWithUndefined(field);
    if (columnWithUndefined) {
      return columnWithUndefined
    }


    let length = field.max

    if (field.min) {
      length = this.randomService.randomBetween(field.min, field.max)
    }

    const string = StringFieldSource.source.substr(0, length);

    return {key: field.name, value: string};
  }

}
