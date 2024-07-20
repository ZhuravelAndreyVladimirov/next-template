export class StyleHelper {
  /**
   *
   * @param  classNames
   * @returns {string}
   * @example
   * StyleHelper.merge('class1', 'class2') // 'class1 class2'
   */
  static merge(...classNames: Array<string | undefined>): string {
    return classNames.filter((cn) => cn !== undefined).join(" ");
  }

  /**
   *
   * @param prefix
   * @param className
   * @returns {string}
   * @example
   * StyeHelper.addPrefix("prefixName__", "className") // "prefixName__", "className"
   */

  static addPrefix(prefix: string, className: string): string {
    return prefix.concat(className);
  }
}
