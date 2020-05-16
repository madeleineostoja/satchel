// Selectors aren't grouped because if a browser doesn't understand a
// single selector in a group the whole group is ignored
// See https://www.w3.org/TR/selectors-3/#Conformance

/**
 * Mixin for styling inconsistent <input type="range" /> track
 * @param css CSS to apply to tack
 */
function track(css: TemplateStringsArray) {
  const styles = typeof css === 'string' ? css : css.join();

  return `
    -webkit-appearance: none;
    &::-moz-focus-outer {
      border: 0;
    }
    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      ${styles}
    }
    &::-moz-range-track  {
      -moz-appearance: none;
      ${styles}
    }
    &::-ms-track  {
      ${styles}
    }`;
}

/**
 * Mixin for styling inconsistent <input type="range" /> thumb
 * @param css CSS to apply to thumb
 */
function thumb(css: TemplateStringsArray | string) {
  const styles = typeof css === 'string' ? css : css.join();

  return `
    -webkit-appearance: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      ${styles}
    }
    &::-moz-range-thumb {
      -moz-appearance: none;
      ${styles}
    }
    &::-ms-thumb {
      ${styles}
    }`;
}

export const range = {
  track,
  thumb
};
