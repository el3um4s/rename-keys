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
  {
    value: { a: "a", b: "b", c: ["a", "b", "c"] },
    keysMap: { a: "b", b: "a", c: "d" },
    expected: { b: "a", a: "b", d: ["a", "b", "c"] },
    expectedRecursive: { b: "a", a: "b", d: ["a", "b", "c"] },
  },
  {
    value: { a: "a", b: "b", c: { a: "a", b: "b", c: ["a", "b", "c"] } },
    keysMap: { a: "b", b: "a", c: "d" },
    expected: { b: "a", a: "b", d: { a: "a", b: "b", c: ["a", "b", "c"] } },
    expectedRecursive: {
      b: "a",
      a: "b",
      d: { b: "a", a: "b", d: ["a", "b", "c"] },
    },
  },
  {
    value: { a: "a", b: "b", c: { a: "a", b: "b" } },
    keysMap: undefined,
    expected: { a: "a", b: "b", c: { a: "a", b: "b" } },
    expectedRecursive: { a: "a", b: "b", c: { a: "a", b: "b" } },
  },
  {
    value: { a: "a", b: "b", c: { a: "a", b: "b" } },
    keysMap: { a: "A" },
    expected: { A: "a", b: "b", c: { a: "a", b: "b" } },
    expectedRecursive: { A: "a", b: "b", c: { A: "a", b: "b" } },
  },

  {
    value: {
      foo: "hello",
      bar: "john",
      it: {
        foo: "ciao",
        bar: "giovanni",
      },
    },
    keysMap: { foo: "greeting", bar: "name" },
    expected: {
      greeting: "hello",
      name: "john",
      it: {
        foo: "ciao",
        bar: "giovanni",
      },
    },
    expectedRecursive: {
      greeting: "hello",
      name: "john",
      it: {
        greeting: "ciao",
        name: "giovanni",
      },
    },
  },
];

export { obj };
