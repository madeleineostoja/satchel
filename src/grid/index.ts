/**
 * Mixin for creating simple flex-based grids
 * @param gutter Width of grid guttres
 */
export function flexGrid(gutter: string = '2rem') {
  return `
    display: flex;
    flex-wrap: wrap;
    margin: calc(0px - (${gutter} / 2));
    & > * {
      padding: calc(${gutter} / 2);
    }
  `;
}

/**
 * Basic 'display: subgrid' shim for full-width grids
 */
export const subgrid = `
  display: grid;
  grid-column: 1 / -1 !important;
  grid: inherit;
  grid-gap: inherit;
  grid-template-columns: inherit;
  -ms-grid-column: 1;
  -ms-grid-column-span: 99;
`;

/**
 * Shim grid row auto-placement in IE11
 * @param n Number of rows to shim
 */
export function msGridRows(n: number = 5) {
  const rows = [];

  for (let i = 1; i <= n; i++) {
    rows.push(`& > :nth-of-type(${i}) {
      -ms-grid-row: ${i};
    }`);
  }
  return `${rows.join('\n')}`;
}
