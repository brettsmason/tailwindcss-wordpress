const _ = require('lodash');

module.exports = function({ addUtilities, theme }) {
  const editorColorText = _.map(
    theme("editorColorPalette", {}),
    (value, key) => {
      return {
        [`.has-${key}-text-color`]: {
          color: value
        },
      };
    }
  );

  const editorColorBackground = _.map(
    theme("editorColorPalette", {}),
    (value, key) => {
      return {
        [`.has-${key}-background-color`]: {
          backgroundColor: value
        },
      };
    }
  );

  const editorFontSizes = _.map(
    theme("editorFontSizes", {}),
    (value, key) => {
      return {
        [`.has-${key}-font-size`]: {
          fontSize: value
        }
      };
    }
  );

  const screenReaderText = {
    ".screen-reader-text": {
      border: "0",
      clip: "rect(1px, 1px, 1px, 1px)",
      clipPath: "inset(50%)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      width: "1px",
      wordWrap: "normal !important",
      "&:focus": {
        position: "static",
        width: "auto",
        height: "auto",
        overflow: "visible",
        clip: "auto",
        whiteSpace: "normal"
      }
    }
  };

  addUtilities([
    editorColorText,
    editorColorBackground,
    editorFontSizes,
    screenReaderText
  ], {
    respectPrefix: false,
    respectImportant: false,
  });
}