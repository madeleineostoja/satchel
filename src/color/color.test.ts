import { rgba, hex } from '.';

describe('Color functions', () => {
  test('Converts hex to rgba', () => {
    expect(rgba('#fff', 0.5)).toMatchString(`rgba(255,255,255, 0.5)`);
  });
  test('Converts color keyword to rgba', () => {
    expect(rgba('red', 0.5)).toMatchString(`rgba(255,0,0, 0.5)`);
  });
  test('Converts rgb to hex', () => {
    expect(hex(255, 255, 255)).toMatchString('#ffffff');
  });
});
