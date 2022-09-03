# tailwindcss-cmdk

For usage with [cmdk](https://github.com/pacocoursey/cmdk)

## Installation

```sh
npm i -D tailwindcss-cmdk
yarn add -D tailwindcss-cmdk
pnpm add -D tailwindcss-cmdk
```

## Usage

Add the plugin to your plugins array:

```js
module.exports = {
  theme: {
    // --snip--
  },
  variants: {
    // --snip--
  },
  plugins: [require("tailwindcss-cmdk")],
};
```
