type Options = {
  mode: 'expandable' | 'absolute' | 'lite';
};

const STYLES = {
  expandable: `
  &::before {
    content: '';
    width: 1px;
    margin-left: -1px;
    float: left;
  }
  &::after {
    content: '';
    display: table;
    clear: both;
  }`,
  absolute: `
    position: relative;
      & > * {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      &::before {
        content: '';
        position: relative;
      }
    `,
  lite: ''
};

/**
 * Constrain a box to an aspect ratio
 * @param x X aspect
 * @param y Y aspect
 */
export function aspectRatio(
  x: number,
  y: number,
  options: Options = {
    mode: 'expandable'
  }
) {
  return /* css */ `
    ${STYLES[options.mode]}
    &::before {
      padding-top: ${(y / x) * 100}%;
    }
  `;
}
