// NOTE: Selectors aren't grouped because if a browser doesn't understand a
// single selector in a group the whole group is ignored
// See https://www.w3.org/TR/selectors-3/#Conformance

/**
 * Mixin for styling inconsistent <input type="range" />
 * @param css CSS to apply to track and thumb
 */
export function range({
  track,
  thumb
}: { track?: string; thumb?: string } = {}) {
  return `
    -webkit-appearance: none;
    &::-moz-focus-outer {
      border: 0;
    }
    ${
      track
        ? `&::-webkit-slider-runnable-track {
          -webkit-appearance: none;
          ${track}
        }
        &::-moz-range-track  {
          -moz-appearance: none;
          ${track}
        }
        &::-ms-track  {
          ${track}
        }`
        : ''
    }
    ${
      thumb
        ? `&::-webkit-slider-thumb {
        -webkit-appearance: none;
        ${thumb}
      }
      &::-moz-range-thumb {
        -moz-appearance: none;
        ${thumb}
      }
      &::-ms-thumb {
        ${thumb}
      }`
        : ''
    }
  `;
}
