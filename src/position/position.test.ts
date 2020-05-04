import { position } from '.';

const FIXTURES = {
  singleUnit: `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `,
  doubleUnit: `
    position: absolute;
    top: 0;
    right: 2rem;
    bottom: 0;
    left: 2rem;
  `,
  tripleUnit: `
    position: relative;
    top: 0;
    right: 2rem;
    bottom: 3rem;
    left: 2rem;
  `,
  fourUnit: `
    position: fixed;
    top: 1rem;
    right: 2rem;
    bottom: 3rem;
    left: auto;
  `
};

describe('Positioning', () => {
  test('Expands single unit shorthand', () => {
    expect(position('absolute', '0')).toMatchString(FIXTURES.singleUnit);
  });

  test('Expands double unit shorthand', () => {
    expect(position('absolute', '0 2rem')).toMatchString(FIXTURES.doubleUnit);
  });

  test('Expands triple unit shorthand', () => {
    expect(position('relative', '0 2rem 3rem')).toMatchString(
      FIXTURES.tripleUnit
    );
  });

  test('Expands four unit shorthand', () => {
    expect(position('fixed', '1rem 2rem 3rem auto')).toMatchString(
      FIXTURES.fourUnit
    );
  });
});
