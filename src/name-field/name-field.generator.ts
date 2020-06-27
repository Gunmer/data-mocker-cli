import { RandomService } from '../core/random.service';
import { FieldGenerator } from '../core/row.generator';
import { ColumnModel } from '../core/row.model';
import { NameFieldModel } from './name-field.model';
import { NameFieldSource } from './name-field.source';

export class NameFieldGenerator implements FieldGenerator<NameFieldModel, string>{
  private readonly randomService = new RandomService()

  type: string = 'Name'

  generate(field: NameFieldModel): ColumnModel<string> {
    let names = field.source ?? NameFieldSource.source;
    let index = this.randomService.randomIndex(names.length);
    return {key: field.name, value: names[index]}
  }

}
