import { lineCrop } from '.';

const FIXTURES = {
  lineCrop: {
    lineHeight: `
      &::before {
        content: '';
        display: block;
        height: 0;
        width: 0;
        margin-top: calc(-0.2 * 0.5em);
      }`,
    withModifier: `
    &::before {
      content: '';
      display: block;
      height: 0;
      width: 0;
      margin-top: calc(-0.25 * 0.5em);
    }`
  }
};

describe('Typography', () => {
  test('Applies lineCrop with only line-height', () => {
    expect(lineCrop(1.2)).toMatchString(FIXTURES.lineCrop.lineHeight);
  });

  test('Applies lineCrop with modifier', () => {
    expect(lineCrop(1, 0.75)).toMatchString(FIXTURES.lineCrop.withModifier);
  });
});
