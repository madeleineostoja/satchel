import { flexGrid, msGridRows } from '.';

const FIXTURES = {
  flexGrid: `
    display: flex;
    flex-wrap: wrap;
    margin: calc(0px - (2rem / 2));
    & > * {
      padding: calc(2rem / 2);
    }
  `,
  msRowsDefault: `
  & > :nth-of-type(1) {
    -ms-grid-row: 1;
  }
  & > :nth-of-type(2) {
    -ms-grid-row: 2;
  }
  & > :nth-of-type(3) {
    -ms-grid-row: 3;
  }
  & > :nth-of-type(4) {
    -ms-grid-row: 4;
  }
  & > :nth-of-type(5) {
    -ms-grid-row: 5;
  }
  `,
  msRowsCustom: `
  & > :nth-of-type(1) {
    -ms-grid-row: 1;
  }
  & > :nth-of-type(2) {
    -ms-grid-row: 2;
  }
  `
};

describe('Grids', () => {
  test('Applies flex grid mixin', () => {
    expect(flexGrid('2rem')).toMatchString(FIXTURES.flexGrid);
  });
  test('Shims -ms-grid-row for direct children', () => {
    expect(msGridRows()).toMatchString(FIXTURES.msRowsDefault);
  });
  test('Shims -ms-grid-row with custom number of rows', () => {
    expect(msGridRows(2)).toMatchString(FIXTURES.msRowsCustom);
  });
});
