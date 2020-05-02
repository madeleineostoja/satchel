import { msGridRows } from './subgrid';

const FIXTURES = {
  msRowsDefault: `
  & > :nth-child(1) {
    -ms-grid-row: 1;
  }
  & > :nth-child(2) {
    -ms-grid-row: 2;
  }
  & > :nth-child(3) {
    -ms-grid-row: 3;
  }
  & > :nth-child(4) {
    -ms-grid-row: 4;
  }
  & > :nth-child(5) {
    -ms-grid-row: 5;
  }
  `,
  msRowsCustom: `
  & > :nth-child(1) {
    -ms-grid-row: 1;
  }
  & > :nth-child(2) {
    -ms-grid-row: 2;
  }
  `
};

describe('Subgrids', () => {
  test('Shims -ms-grid-row for direct children', () => {
    expect(msGridRows()).toMatchString(FIXTURES.msRowsDefault);
  });
  test('Shims -ms-grid-row with custom number of rows', () => {
    expect(msGridRows(2)).toMatchString(FIXTURES.msRowsCustom);
  });
});
