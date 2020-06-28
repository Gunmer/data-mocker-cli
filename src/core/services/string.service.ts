import { StringUtils } from 'turbocommons-ts';

export class StringService {
  formatCamelCase(string: string): string {
    return StringUtils.formatCase(string, StringUtils.FORMAT_LOWER_CAMEL_CASE)
  }
}
