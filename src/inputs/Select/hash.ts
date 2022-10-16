import objectHash from "object-hash";

export const hash = <T>(value: T) => objectHash(value as any);
