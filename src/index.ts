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

// const _renameKeysAll = (
//   obj: Record<string, unknown>,
//   keysMap: Record<string, string> = {}
// ): Record<string, unknown> => {
//   return Object.keys(obj).reduce(
//     (acc, key) => ({
//       ...acc,
//       ...{ [keysMap[key] || key]: obj[key] },
//     }),
//     {}
//   );
// };

const renameKeysAll = (
  obj: Record<string, unknown>,
  keysMap: Record<string, string> = {}
): Record<string, unknown> => {
  const a: Record<string, unknown> = {};

  const result = Object.keys(obj).reduce((acc, key) => {
    if (isObject(obj[key])) {
      let nk: Record<string, unknown> = { [keysMap[key] || key]: obj[key] };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      nk = renameKeysAll(obj[key], keysMap);
      return {
        ...acc,
        ...{ [keysMap[key] || key]: nk },
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
