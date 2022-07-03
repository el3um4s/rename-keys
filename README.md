# renameKeys & renameKeysAll

Creates a new object from the specified object, where all the keys are in lowercase.

NPM link: [@el3um4s/rename-keys](https://www.npmjs.com/package/@el3um4s/rename-keys)

### Install and use the package

To use the package in a project:

```bash
npm i @el3um4s/rename-keys
```

and then in a file:

```js
import { renameKeys, renameKeysAll } from "@el3um4s/rename-keys";

const obj = {
  foo: "hello",
  bar: "john",
  it: {
    foo: "ciao",
    bar: "giovanni",
  },
};

const keysMap= { foo: "greeting", bar: "name" },

const lowerCaseObj = renameKeys(obj);
// {
//   greeting: "hello",
//   name: "john",
//   it: {
//      foo: "ciao",
//      bar: "giovanni",
//   },
// }

const lowerCaseAllObj = renameKeysAll(obj);
// {
//   greeting: "hello",
//   name: "john",
//   it: {
//      greeting: "ciao",
//      name: "giovanni",
//   },
// }
```
