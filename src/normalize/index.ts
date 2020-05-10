import normalizeCSS from 'modern-normalize/modern-normalize.css';
import normalizeLegacyCSS from '@csstools/normalize.css';
import remedyCSS from 'cssremedy/css/remedy.css';

const BASE = {
    normalize: `${normalizeCSS}`,
    'normalize-legacy': `${normalizeLegacyCSS}`,
    remedy: `${remedyCSS}`
  },
  OPTIONS = {
    saneEmbeds: `
      img, svg, video, canvas, audio, iframe, embed, object {
        display: block;
        vertical-align: middle;
        max-width: 100%;
      }

      img, svg, video, canvas {
        height: auto;
      }
    `,
    hiddenProp: `
      [hidden] {
        display: none !important;
      }
    `,
    fontSmoothing: `
      html {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `,
    resetMargins: `
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      figure,
      pre {
        margin: 0;
      }
   `,
    resetHeadings: `
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

export type NormalizeProps = {
  base?: 'normalize' | 'normalize-legacy' | 'remedy';
  saneEmbeds?: boolean;
  hiddenProp?: boolean;
  resetMargins?: boolean;
  resetHeadings?: boolean;
  fontSmoothing?: boolean;
};

export function normalize({
  base = 'normalize',
  saneEmbeds = true,
  hiddenProp = true,
  ...props
}: NormalizeProps) {
  return `
    ${BASE[base]}
    ${saneEmbeds && base !== 'remedy' ? OPTIONS.saneEmbeds : ''}
    ${hiddenProp ? OPTIONS.hiddenProp : ''}
    ${Object.keys(props)
      .map((prop) => (props[prop] ? OPTIONS[prop] : ''))
      .join('')}
  `;
}
