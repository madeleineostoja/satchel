import normalizeCSS from 'modern-normalize/modern-normalize.css';
import remedyCSS from 'cssremedy/css/remedy.css';
import { normalize } from '.';

const FIXTURES = {
  extras: `
   ${normalizeCSS}
    img, svg, video, canvas, audio, iframe, embed, object {
      display: block;
      vertical-align: middle;
      max-width: 100%;
    }

    img, svg, video, canvas {
      height: auto;
    }

    [hidden] {
      display: none !important;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }
  `
};

describe('Normalize', () => {
  test('Applies base normalize', () => {
    expect(
      normalize({ base: 'normalize', saneEmbeds: false, hiddenProp: false })
    ).toMatchString(`${normalizeCSS}`);
  });

  test('Applies alternate base normalize', () => {
    expect(
      normalize({ base: 'remedy', saneEmbeds: false, hiddenProp: false })
    ).toMatchString(`${remedyCSS}`);
  });

  test('Applies extra resets with default base', () => {
    expect(normalize({ saneEmbeds: true, resetHeadings: true })).toMatchString(
      FIXTURES.extras
    );
  });
});
