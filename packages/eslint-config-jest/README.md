# eslint-config-sc-jest
- Strict Check config for eslint.
- For Jest.

## How to use
### Installation

```shell
$ yarn add -D eslint-config-sc-jest
```

### Use for `eslint.config.mjs`

```javascript
// eslint.config.mjs
import eslintConfigSCJest from "eslint-config-sc-jest"

export default [
  ...[/* other rules for product code */],
  ...eslintConfigSCJest.configs.recommended,
]

// Below is equal
export default [
  ...[/* other rules for product code */],
  ...eslintConfigSCJest.configs.baseRecords,
  ...eslintConfigSCJest.configs.customRecords,
  ...eslintConfigSCJest.configs.eslintOverrideRecords, // for javascript project
  ...eslintConfigSCJest.configs.typescriptEslintOverrideRecords, // for typecript project
]
```

### Use for `.eslintrc.js`

```javascript
// .eslintrc.js
module.exports = {
  extends: [
    "...", // other extends for product code
    "sc-jest/legacy",
  ]
}

// Below is equal
const eslintConfigSCJest = require("eslint-config-sc-jest")

module.exports = {
  extends: [
    "...", // other extends for product code
  ],
  plugins: ["jest"],
  overrides: [
    ...[/* other overrides */],
    ...eslintConfigSCJest.configs.legacy.overrides,
  ],
}
```

## Used config, plugin ( alphabetical )
### plugin
- [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)

## License
- [MIT](LICENSE)