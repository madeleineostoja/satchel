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

    ol,
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  `
};

describe('Normalize', () => {
  test('Applies base normalize', () => {
    expect(normalize({ base: 'normalize', saneEmbeds: false })).toMatchString(
      `${normalizeCSS}`
    );
  });

  test('Applies alternate base normalize', () => {
    expect(normalize({ base: 'remedy', saneEmbeds: false })).toMatchString(
      `${remedyCSS}`
    );
  });

  test('Applies extra resets with default base', () => {
    expect(normalize({ saneEmbeds: true, resetLists: true })).toMatchString(
      FIXTURES.extras
    );
  });
});
