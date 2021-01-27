import { MODES, aspect } from '.';

const FIXTURES = {
  aspect: /* css */ `
  &::before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }`
};

describe('Aspect ratio', () => {
  test('Generates correct padding', () => {
    expect(aspect(16, 9, { mode: 'lite' })).toMatchString(FIXTURES.aspect);
  });
  test('Includes extra styles for expandable mode', () => {
    expect(aspect(16, 9, { mode: 'expandable' })).toMatchString(
      `${MODES.expandable}${FIXTURES.aspect}`
    );
  });
  test('Includes extra styles for absolute mode', () => {
    expect(aspect(16, 9, { mode: 'absolute' })).toMatchString(
      `${MODES.absolute}${FIXTURES.aspect}`
    );
  });
  test('Includes extra styles for image mode', () => {
    expect(aspect(16, 9, { mode: 'image' })).toMatchString(
      `${MODES.image}${FIXTURES.aspect}`
    );
  });
});
