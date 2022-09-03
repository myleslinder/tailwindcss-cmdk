# tailwindcss-cmdk

![tailwindcss v3
    ready](https://img.shields.io/badge/tailwindcss-v3%20ready-0F172A?logo=tailwindcss&style=flat&labelColor=38bdf8&logoColor=ffffff)
![npm version](https://img.shields.io/npm/v/tailwindcss-cmdk.svg)

Variants for styling [cmdk](https://github.com/pacocoursey/cmdk) attributes.

## Installation

```sh
npm i -D tailwindcss-cmdk
yarn add -D tailwindcss-cmdk
pnpm add -D tailwindcss-cmdk
```

## Setup

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

## Usage

[cmdk has a number of CSS attributes that are applied to parts of the component](https://github.com/pacocoursey/cmdk#parts-and-styling). Use the variants named the same as the atributes listed in the cmdk docs (e.g. `cmdk-root:bg-white`).

> Note: `cmdk-group-heading` is an element you don't create directly so you need to apply the `cmdk-group-heading` variants directly to the `Command.Group` component.

### Group & Peer usage

There are variants for `group` and `peer` for all the attributes and they're the same just prefixed with `group-` and `peer-` respectively (e.g. `group-cmdk-input:`).

### cmdk-item Aria states

The `cmdk-item` attributes also include base, group, and peer variants for `aria-disabled` `aria-selected` (e.g. `cmdk-item:aria-disabled:`)

### cmdk-root Hidden state

The `cmdk-root` attribute includes base, group, and peer variants for the `hidden` attribute: `cmdk-root-hidden:`.

## License

MIT

<!--
[![tailwindcss v3 ready](https://img.shields.io/badge/tailwindcss-v3%20ready-0F172A?logo=tailwindcss&style=flat&labelColor=38bdf8&logoColor=ffffff)](https://tailwindcss.com)
[![npm version](https://img.shields.io/npm/v/tailwindcss-cmdk.svg)](https://www.npmjs.com/package/tailwindcss-cmdk)
 -->
