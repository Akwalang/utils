/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * callsites function from npm package callsites
 * author: Sindre Sorhus
 * link: https://www.npmjs.com/package/callsites
 */

function callsites(): { getFileName: () => string }[] {
  // @ts-ignore
  const _prepareStackTrace = Error.prepareStackTrace;
  // @ts-ignore
  Error.prepareStackTrace = (_, stack) => stack;
  // @ts-ignore
  const stack = new Error().stack.slice(1);
  // @ts-ignore
  Error.prepareStackTrace = _prepareStackTrace;
  // @ts-ignore
  return stack;
}

export default function getStack(from?: number, to?: number): { file: string }[] {
let [, ...stack] = callsites();

stack = stack.slice(from, to);

return stack.map(item => {
  let file = item.getFileName();

  file = file && file.split('\\').join('/');

  return { file };
});
}
