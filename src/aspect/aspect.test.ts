import { aspect } from '.';

const FIXTURES = {
  aspect: `
  &::before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }`,
  expandable: `
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
  absolute: `
  position: relative;
    & > * {
      position: absolute !important;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    &::before {
      position: relative;
    }
  `
};

describe('Aspect ratio', () => {
  test('Generates correct padding', () => {
    expect(aspect(16, 9, { mode: 'lite' })).toMatchString(FIXTURES.aspect);
  });
  test('Includes extra styles for expandable mode', () => {
    expect(aspect(16, 9, { mode: 'expandable' })).toMatchString(
      `${FIXTURES.expandable}${FIXTURES.aspect}`
    );
  });
  test('Includes extra styles for absolute mode', () => {
    expect(aspect(16, 9, { mode: 'absolute' })).toMatchString(
      `${FIXTURES.absolute}${FIXTURES.aspect}`
    );
  });
});
