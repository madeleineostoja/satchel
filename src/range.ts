// NOTE: Selectors aren't grouped because if a browser doesn't understand a
// single selector in a group the whole group is ignored
// See https://www.w3.org/TR/selectors-3/#Conformance

/**
 * Mixin for styling inconsistent <input type="range" /> track
 * @param css CSS to apply
 */
export function track(css: string) {
  return `
    -webkit-appearance: none;
    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      ${css}
    }
    &::-moz-range-track  {
      -moz-appearance: none;
      ${css}
    }
    &::-ms-track  {
      ${css}
    }
    &::-moz-focus-outer {
      border: 0;
    }
  `;
}

/**
 * Mixin for styling inconsistent <input type="range" /> thumb
 * @param css CSS to apply
 */
export function thumb(css: string) {
  return `
    -webkit-appearance: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      ${css}
    }
    &::-moz-range-thumb {
      -moz-appearance: none;
      ${css}
    }
    &::-ms-thumb {
      ${css}
    }
  `;
}
