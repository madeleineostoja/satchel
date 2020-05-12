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
  }`
};

describe('Aspect ratio', () => {
  test('Generates correct padding', () => {
    expect(aspect(16, 9, { mode: 'lite' })).toMatchString(FIXTURES.aspect);
  });
  test('Includes extra styles for patterns', () => {
    expect(aspect(16, 9, { mode: 'expandable' })).toMatchString(
      `${FIXTURES.expandable}${FIXTURES.aspect}`
    );
  });
});
