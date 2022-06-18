export default function setAsyncTimeout(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
};
