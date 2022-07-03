import { renameKeys, renameKeysAll } from "../index";

import { obj } from "./_Objects.data";

test.each(obj)(
  `$# : $value --> $keysMap --> $expected`,
  ({ value, keysMap, expected }) => {
    const originalData = { ...value };

    const result = renameKeys(value, keysMap);
    expect(value).toEqual(originalData);
    expect(result).toEqual(expected);
  }
);

test.each(obj)(
  `$# : RECURSIVE: $value --> $keysMap --> $expectedRecursive`,
  ({ value, keysMap, expectedRecursive }) => {
    const originalData = { ...value };

    const result = renameKeysAll(value, keysMap);
    expect(value).toEqual(originalData);
    expect(result).toEqual(expectedRecursive);
    // console.log(expectedRecursive);
    // console.log(result);
  }
);
