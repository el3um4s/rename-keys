import isObject from "@el3um4s/is-object";

const renameKeys = (
  obj: Record<string, unknown>,
  keysMap: Record<string, string> = {}
): Record<string, unknown> => {
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {}
  );
};

const renameKeysAll = (
  obj: Record<string, unknown>,
  keysMap: Record<string, string> = {}
): Record<string, unknown> => {
  const a: Record<string, unknown> = {};

  const result = Object.keys(obj).reduce((acc, key) => {
    if (isObject(obj[key])) {
      return {
        ...acc,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ...{ [keysMap[key] || key]: renameKeysAll(obj[key], keysMap) },
      };
    } else {
      return {
        ...acc,
        ...{ [keysMap[key] || key]: obj[key] },
      };
    }
  }, a);

  return result;
};

export { renameKeys, renameKeysAll };
