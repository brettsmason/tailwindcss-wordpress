# Tailwind CSS WordPress Utility Classes

Tailwind CSS plugin for WordPress specific utility classes.

This plugin currently includes:

- Editor Color Palette classes (`.has-[color]-text-color` and `.has-[color]-background-class`)
- Editor Font Size classes (`.has-[size]-font-size`)
- `.screen-reader-text` - WordPress specific accessibility class

## Install

1. Install the plugin:

  ```bash
  # Using npm
  npm install @brettsmason/tailwindcss-wordpress --save-dev

  # Using Yarn
  yarn add @brettsmason/tailwindcss-wordpress -D
  ```

2. Add it to your `tailwind.config.js` file:

  ```js
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      require('@brettsmason/tailwindcss-wordpress')
    ]
  }
  ```

## Usage

This plugin uses the keys `editorColorPalette` and `editorFontSizes` in your Tailwind config’s `theme` object to generate the utilities. Here is an example:

```js
// tailwind.config.js
{
  theme: {
    editorColorPalette: {
      'primary': '#f2f2f2',
      'secondary': '#ccc',
    },
    editorFontSizes: {
      'small': '16px',
      'medium': '22px',
    },
  },
  plugins: [
    require('tailwindcss-wordpress')(),
  ],
}
```
