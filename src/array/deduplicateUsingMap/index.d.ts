type GetId<T extends {}> = (a: T) => string | number;

export declare function deduplicateUsingMap<T extends {}>(target: T[], getId?: GetId<T>): T[];

export default deduplicateUsingMap;
