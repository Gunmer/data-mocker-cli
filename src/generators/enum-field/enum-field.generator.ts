import { FieldGenerator } from '../../core/field.generator';
import { ColumnModel } from '../../core/models/column.model';
import { EmptySourceException } from './empty-source.exception';
import { EnumFieldModel } from './enum-field.model';

export class EnumFieldGenerator extends FieldGenerator<EnumFieldModel, string> {
  type = 'Enum'

  generate(field: EnumFieldModel): ColumnModel<string> {
    const columnWithUndefined = this.generateColumnWithUndefined(field);
    if (columnWithUndefined) {
      return columnWithUndefined
    }

    if (field.source.length == 0) {
      throw new EmptySourceException(field.name)
    }

    const item = this.randomService.randomItem(field.source);

    return {key: field.name, value: item};
  }

}
