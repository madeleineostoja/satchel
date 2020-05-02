/**
 * Basic 'display: subgrid' shim
 */
export const subgrid = `
  display: grid;
  grid-column: 1 / 99;
  grid: inherit;
  grid-gap: inherit;
  grid-template-columns: inherit;
`;

/**
 * Shim grid row auto-placement in IE11
 * @param n Number of rows to shim
 */
export function msGridRows(n = 5) {
  const rows = [];

  for (let i = 1; i <= n; i++) {
    rows.push(`& > :nth-child(${i}) {
      -ms-grid-row: ${i};
    }`);
  }
  return `${rows.join('\n')}`;
}
