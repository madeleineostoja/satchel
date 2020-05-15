/**
 * Helper to parse shorthand value string into positions
 * @param values Shorthand values string
 */
function parseValues(
  values: string
): {
  top: string;
  right: string;
  left: string;
  bottom: string;
  important: boolean;
} {
  const valueArray = values.match(
      /(([\+\-]?[0-9\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw)?)|(calc\(([^\)]+)\)|null|false|undefined|auto)/g
    ),
    positions: any = {
      top: 'auto',
      right: 'auto',
      bottom: 'auto',
      left: 'auto'
    };

  if (!valueArray) {
    return positions;
  }

  switch (valueArray.length) {
    case 1:
      Object.keys(positions).forEach((pos) => (positions[pos] = valueArray[0]));
      break;
    case 2:
      Object.keys(positions).forEach(
        (pos, i) => (positions[pos] = valueArray[(i + 1) % 2 ? 0 : 1])
      );
      break;
    case 3:
      Object.keys(positions).forEach(
        (pos, i) => (positions[pos] = valueArray[i === 3 ? 1 : i])
      );
      break;
    case 4:
      Object.keys(positions).forEach(
        (pos, i) => (positions[pos] = valueArray[i])
      );
      break;
  }
  return { ...positions, important: /!important$/.test(values) };
}

/**
 * Set positioning properties with shorthand values
 * @param position Position property to generate
 * @param values Shorthand value string
 */
export function position(position: string, values: string | number) {
  const { top, right, bottom, left, important } = parseValues(
    values.toString()
  );

  return `
    position: ${position}${important ? ' !important' : ''};
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
  `;
}
