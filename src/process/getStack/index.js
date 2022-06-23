/**
 * callsites function from npm package callsites
 * author: Sindre Sorhus
 * link: https://www.npmjs.com/package/callsites
 */

function callsites() {
  const _prepareStackTrace = Error.prepareStackTrace;
  Error.prepareStackTrace = (_, stack) => stack;
  const stack = new Error().stack.slice(1);
  Error.prepareStackTrace = _prepareStackTrace;
  return stack;
}

export default function getStack(from, to) {
  let [, ...stack] = callsites();

  stack = stack.slice(from, to);

  return stack.map(item => {
    let file = item.getFileName();

    file = file && file.split('\\').join('/');

    return { file };
  });
}
