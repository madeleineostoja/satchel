import normalizeCSS from 'modern-normalize/modern-normalize.css';
import normalizeCSSLegacy from '@csstools/normalize.css';
import remedyCSS from 'cssremedy/css/remedy.css';

const BASE = {
    normalize: `${normalizeCSS}`,
    'normalize-legacy': `${normalizeCSSLegacy}`,
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
    `,
    resetLists: `
      ol,
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    `
  };

export type NormalizeProps = {
  base?: 'normalize' | 'normalize-legacy' | 'remedy';
  saneEmbeds?: boolean;
  hiddenProp?: boolean;
  resetMargins?: boolean;
  resetHeadings?: boolean;
  resetLists?: boolean;
};

export function normalize({
  base = 'normalize',
  saneEmbeds = true,
  hiddenProp = true,
  resetMargins,
  resetHeadings,
  resetLists
}: NormalizeProps) {
  return `
    ${BASE[base]}
    ${saneEmbeds && base !== 'remedy' ? OPTIONS.saneEmbeds : ''}
    ${hiddenProp ? OPTIONS.hiddenProp : ''}
    ${resetMargins ? OPTIONS.resetMargins : ''}
    ${resetHeadings ? OPTIONS.resetHeadings : ''}
    ${resetLists ? OPTIONS.resetLists : ''}
  `;
}
