interface Obj {
  value: Record<string, unknown>;
  keysMap: Record<string, string> | undefined;
  expected: Record<string, unknown>;
  expectedRecursive: Record<string, unknown>;
}

const obj: Obj[] = [
  {
    value: { a: "a" },
    keysMap: { a: "b" },
    expected: { b: "a" },
    expectedRecursive: { b: "a" },
  },

  {
    value: { a: "a" },
    keysMap: { b: "a" },
    expected: { a: "a" },
    expectedRecursive: { a: "a" },
  },
  {
    value: { a: "a" },
    keysMap: {},
    expected: { a: "a" },
    expectedRecursive: { a: "a" },
  },
  {
    value: { a: "a" },
    keysMap: undefined,
    expected: { a: "a" },
    expectedRecursive: { a: "a" },
  },
  {
    value: { a: "a", b: "b" },
    keysMap: { a: "b", b: "a" },
    expected: { b: "a", a: "b" },
    expectedRecursive: { b: "a", a: "b" },
  },
  {
    value: { a: "a", b: "b" },
    keysMap: { a: "b" },
    expected: { b: "b" },
    expectedRecursive: { b: "b" },
  },
  {
    value: { a: "a", b: "b" },
    keysMap: { b: "a" },
    expected: { a: "b" },
    expectedRecursive: { a: "b" },
  },
  {
    value: { a: "a", b: "b", c: { a: "a", b: "b" } },
    keysMap: { a: "b", b: "a", c: "d" },
    expected: { b: "a", a: "b", d: { a: "a", b: "b" } },
    expectedRecursive: { b: "a", a: "b", d: { b: "a", a: "b" } },
  },
];

export { obj };
