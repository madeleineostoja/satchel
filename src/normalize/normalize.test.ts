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

    @media (prefers-reduced-motion: reduce) {
      *, ::before, ::after {
        animation-delay: -1ms !important;
        animation-duration: 1ms !important;
        animation-iteration-count: 1 !important;
        background-attachment: initial !important;
        scroll-behavior: auto !important;
        transition-delay: 0s !important;
        transition-duration: 0s !important;
      }
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
  `,
  noBase: `
    [hidden] {
      display: none !important;
    }
  `
};

const disableDefaults = {
  saneEmbeds: false,
  hiddenProp: false,
  reduceMotion: false
};

describe('Normalize', () => {
  test('Applies base normalize', () => {
    expect(normalize({ base: 'normalize', ...disableDefaults })).toMatchString(
      `${normalizeCSS}`
    );
  });

  test('Applies alternate base normalize', () => {
    expect(normalize({ base: 'remedy', ...disableDefaults })).toMatchString(
      `${remedyCSS}`
    );
  });

  test('Applies extra resets with default base', () => {
    expect(normalize({ resetHeadings: true })).toMatchString(FIXTURES.extras);
  });

  test('Applies resets with no base', () => {
    expect(
      normalize({ base: null, ...disableDefaults, hiddenProp: true })
    ).toMatchString(FIXTURES.noBase);
  });
});
