import { ColumnModel } from './row.model';
import { FieldModel } from './schema.model';
import { RandomService } from './services/random.service';

export abstract class FieldGenerator<P extends FieldModel, R> {
  abstract type: string;
  protected readonly randomService = new RandomService()

  abstract generate(field: P): ColumnModel<R>;

  generateColumnWithUndefined(field: P): ColumnModel<R> | undefined {
    const isNullable = field.isNullable ?? false;

    if (isNullable && this.randomService.randomIsUndefined()) {
      return {key: field.name, value: undefined}
    }

    return undefined;
  }
}
