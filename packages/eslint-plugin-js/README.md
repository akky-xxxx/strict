# @strict/eslint-plugin-js
- Strict rules for eslint.

## Installation

```shell
# by yarn
$ yarn add -D @strict/eslint-plugin-js

# by npm
$ npm i --save-dev @strict/eslint-plugin-js
```

## Usage

### for `eslint.config.mjs`
```js
import eslintPluginStrictJs from "@strict/eslint-plugin-js"

export default [
  {
    plugins: {
      "@strict/js": eslintPluginStrictJs, // It is not necessary when use the recommended config
    },
  },
  eslintPluginStrictJs.configs.recommended,
]
```

### for `.eslintrc.js`

```js
module.exports = {
  plugins: ["@strict/js"], // It is not necessary when use the recommended config
  extends: [
    "plugin:@strict/js/legacy"
  ],
  rules: {
    ...
  },
}
```

## Rules

✅: Set in the recommended configuration.

| Name                                                                               | Description                                      | 💼 |
|------------------------------------------------------------------------------------|--------------------------------------------------|----|
| [file-path-patterns](docs/rules/file-path-patterns.md)                             | Check if file path follows regular expression    |    |
| [forbidden-multiple-named-exports](docs/rules/forbidden-multiple-named-exports.md) | Forbidden the multiple named exports at one file |    |
| [individual-import](docs/rules/individual-import.md)                               | Import them individual                           |    |
| [match-names-of-file-and-export](docs/rules/match-names-of-file-and-export.md)     | Match name of filename and export target         |    |
| [restrict-use-of-process-env](docs/rules/restrict-use-of-process-env.md)           | Restrict environment usage                       | ✅  |

## License
- [MIT](LICENSE)
