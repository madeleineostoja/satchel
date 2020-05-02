const RESETS = {
  button: `
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-appearance: none;
    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `,
  input: `
    margin: 0;
    border: 0;
    padding: 0;
    display: inline-block;
    vertical-align: middle;
    white-space: normal;
    background: none;
    line-height: 1;
    overflow: auto;
    -webkit-appearance: none;
  `
};

/**
 * Element specific resets
 * @param element Element to reset
 */
export function reset(element: keyof typeof RESETS) {
  return RESETS[element];
}
