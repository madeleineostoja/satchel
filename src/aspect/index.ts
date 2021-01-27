type Options = {
  mode: 'expandable' | 'absolute' | 'image' | 'lite';
};

export const MODES = {
  expandable: /* css */ `
    &::before {
      width: 1px;
      margin-left: -1px;
      float: left;
    }
    &::after {
      content: '';
      display: table;
      clear: both;
    }`,
  absolute: /* css */ `
    position: relative;
      & > * {
        position: absolute !important;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      &::before {
        position: relative;
      }
    `,
  lite: '',
  get image() {
    return /* css */ `
      ${this.absolute}
      overflow: hidden;
      & > img {
        object-fit: cover;
        object-position: center;
      }`;
  }
};

/**
 * Constrain a box to an aspect ratio
 * @param x X aspect
 * @param y Y aspect
 */
export function aspect(
  x: number,
  y: number,
  options: Options = {
    mode: 'absolute'
  }
) {
  return /* css */ `
    ${MODES[options.mode]}
    &::before {
      content: '';
      display: block;
      padding-top: ${(y / x) * 100}%;
    }
  `;
}
