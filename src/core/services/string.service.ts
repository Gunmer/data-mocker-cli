import * as lodash from 'lodash'
import { NameFormatter } from '../models/name-formatter';

export class StringService {

  formatLowerCamelCase(string: string): string {
    return lodash.camelCase(string)
  }

  formatUpperCamelCase(string: string): string {
    const camelCase = lodash.camelCase(string)
    return lodash.upperFirst(camelCase)
  }

  formatUpperSnakeCase(string: string): string {
    return string
      .split(' ')
      .map(w => lodash.upperFirst(w))
      .join('_')
  }

  formatLowerSnakeCase(string: string): string {
    return string
      .split(' ')
      .map(w => lodash.lowerFirst(w))
      .join('_')
  }

  formatUpperKebabCase(string: string): string {
    return string
      .split(' ')
      .map(w => lodash.upperFirst(w))
      .join('-')
  }

  formatLowerKebabCase(string: string): string {
    return string
      .split(' ')
      .map(w => lodash.lowerFirst(w))
      .join('-')
  }

  formatString(string: string, nameFormatter: NameFormatter = NameFormatter.LowerCamelCase): string {
    switch (nameFormatter) {
      case NameFormatter.LowerCamelCase:
        return this.formatLowerCamelCase(string)
      case NameFormatter.UpperCamelCase:
        return this.formatUpperCamelCase(string)
      case NameFormatter.LowerKebabCase:
        return this.formatLowerKebabCase(string)
      case NameFormatter.UpperKebabCase:
        return this.formatUpperKebabCase(string)
      case NameFormatter.LowerSnakeCase:
        return this.formatLowerSnakeCase(string)
      case NameFormatter.UpperSnakeCase:
        return this.formatUpperSnakeCase(string)
      case NameFormatter.WithoutFormat:
        return string
    }
  }

}
