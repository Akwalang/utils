declare function merge<A extends {}, B extends {}>(dest: A, src: B): A & B;

export default merge;
