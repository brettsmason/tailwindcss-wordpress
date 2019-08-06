module.exports = function({ addUtilities }) {
  const WordPressUtilities = {
    '.screen-reader-text': {
      border: '0',
      clip: 'rect(1px, 1px, 1px, 1px)',
      clipPath: 'inset(50%)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: '0',
      position: 'absolute',
      width: '1px',
      wordWrap: 'normal !important',
      '&:focus': {
        position: 'static',
        width: 'auto',
        height: 'auto',
        overflow: 'visible',
        clip: 'auto',
        whiteSpace: 'normal'
      }
    }
  }

  addUtilities(WordPressUtilities)
}
