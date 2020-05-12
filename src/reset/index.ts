const RESETS = {
  button: `
  font: inherit;
  color: inherit;
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    line-height: normal;
    -webkit-appearance: none;'
    cursor: pointer;
    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `,
  input: `
    font: inherit;
    color: inherit;
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
  `,
  fieldset: `
    border: 0;
    padding: 0.01em 0 0 0;
    margin: 0;
    min-width: 0;

    body:not(:-moz-handler-blocked) & {
      display: table-cell;
    }
  `,
  legend: `
    padding: 0;
    display: table;
  `
};

/**
 * Element specific resets
 * @param element Element to reset
 */
export function reset(element: keyof typeof RESETS) {
  return RESETS[element];
}
