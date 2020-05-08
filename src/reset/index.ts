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
  `,
  list: `
    list-style: none;
    padding: 0;
    margin: 0;
  `,
  blockquote: `
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    &::before, &::after {
      content: '';
    }
  `
};

/**
 * Element specific resets
 * @param element Element to reset
 */
export function reset(element: keyof typeof RESETS) {
  return RESETS[element];
}
