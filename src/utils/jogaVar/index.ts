const validIdentifierRegEx = /^[a-z0-9\-]+$/i;

export const jogaVar = (value?: string) =>
  value && validIdentifierRegEx.test(value)
    ? `var(--joga-${value}, ${value})`
    : value;
