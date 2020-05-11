/**
 * Crop a text element's line height to respect ascenders, descenders, and capitals
 * @param lineHeight Line height of the text element
 * @param modifier Height of the font's capital letters, as a percentage of font-size
 */
export function lineCrop(lineHeight: number, modifier: number = 1) {
  if (modifier > 1) {
    console.warn(
      `The modifier given to lineCrop() must be <=1, you gave ${modifier}`
    );
    return '';
  }

  return `
    &::before {
      content: '';
      display: block;
      height: 0;
      width: 0;
      margin-top: calc(${+(modifier - lineHeight).toFixed(2)} * 0.5em);
    }
  `;
}
