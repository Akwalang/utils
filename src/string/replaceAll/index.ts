export = function replaceAll(value: string, sub: string, replacer: string): string {
  return value.split(sub).join(replacer);
}
