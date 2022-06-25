type Keys = string | number | symbol;

declare function combine<K extends Keys, V>(keys: K[], values: V[]): Record<K, V>;

export default combine;
