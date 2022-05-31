import objectHash from "object-hash";
export const hash = (value: {} | null) => objectHash(value);
