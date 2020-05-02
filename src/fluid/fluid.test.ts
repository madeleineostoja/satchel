import { fluid } from './fluid';

// prettier-ignore
const FIXTURES = {
  matchingUnits: `
    font-size: calc(15px + 4 * ((100vw - 400px) / 880));

    @media (max-width: 400px) {
      font-size: 15px;
    }

    @media (min-width: 1280px) {
      font-size: 19px;
    }`,
  differentUnits: `
    font-size: calc(15px + 4 * ((100vw - 40em) / 50));

    @media (max-width: 40em) {
      font-size: 15px;
    }

    @media (min-width: 90em) {
      font-size: 19px;
    }`,
  lineHeight: `
    line-height: calc(1em + 0.5 * ((100vw - 30em) / 50));

    @media (max-width: 30em) {
      line-height: 1em;
    }

    @media (min-width: 80em) {
      line-height: 1.5em;
    }`
};

describe('Fluid units', () => {
  test('Generates fluid font-size with matching units', () => {
    expect(
      fluid('font-size', '15px', '19px', {
        minScreenSize: '400px',
        maxScreenSize: '1280px'
      })
    ).toMatchString(FIXTURES.matchingUnits);
  });

  test('Generates fluid font-size with differing units', () => {
    expect(
      fluid('font-size', '15px', '19px', {
        minScreenSize: '40em',
        maxScreenSize: '90em'
      })
    ).toMatchString(FIXTURES.differentUnits);
  });

  test('Generates fluid units for other properties', () => {
    expect(fluid('line-height', '1em', '1.5em')).toMatchString(
      FIXTURES.lineHeight
    );
  });
});
