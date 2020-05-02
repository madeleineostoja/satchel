import parseUnit from 'parse-unit';
import convert from 'css-unit-converter';

/**
 * Create fluid sizes based on viewport width
 * Ideal for responsive font-size
 * @param property Property to apply responsive size to
 * @param min Minimum property size
 * @param max Maximum property size
 * @param options Configuration options for the sizing
 */
export function fluid(
  property: string,
  min: string,
  max: string,
  opts?: { minScreenSize?: string; maxScreenSize?: string }
) {
  const options = { minScreenSize: '30em', maxScreenSize: '80em', ...opts };

  function getDifference(a: string, b: string) {
    const values = {
        a: parseUnit(a)[0],
        b: parseUnit(b)[0]
      },
      units = {
        a: parseUnit(a)[1],
        b: parseUnit(b)[1]
      };

    if (units.a !== units.b) {
      values.b = convert(values.b, units.b, units.a);
    }

    return values.b - values.a;
  }

  // prettier-ignore
  return `
    ${property}: calc(${min} + ${getDifference(min,max)} * ((100vw - ${options.minScreenSize}) / ${getDifference(options.minScreenSize, options.maxScreenSize)}));

    @media (max-width: ${options.minScreenSize}) {
      ${property}: ${min};
    }

    @media (min-width: ${options.maxScreenSize}) {
      ${property}: ${max};
    }
  `;
}
