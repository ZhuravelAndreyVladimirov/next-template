export class StyleHelper {
  static merge(...classNames: Array<string | undefined>): string {
    return classNames.filter((cn) => cn !== undefined).join(" ");
  }

  static addPrefix(prefix: string, className: string): string {
    return prefix.concat(className);
  }
}
