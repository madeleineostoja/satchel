import { aspectRatio } from '.';

const FIXTURES = {
  aspect: `
  &::before {
    padding-top: 56.25%;
  }`,
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
  }`
};

describe('Aspect ratio', () => {
  test('Generates correct padding', () => {
    expect(aspectRatio(16, 9, { mode: 'lite' })).toMatchString(FIXTURES.aspect);
  });
  test('Includes extra styles for patterns', () => {
    expect(aspectRatio(16, 9, { mode: 'expandable' })).toMatchString(
      `${FIXTURES.expandable}${FIXTURES.aspect}`
    );
  });
});
