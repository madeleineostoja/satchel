import normalizeLegacyCSS from '@csstools/normalize.css';
import remedyCSS from 'cssremedy/css/remedy.css';
import normalizeCSS from 'modern-normalize/modern-normalize.css';

const BASE = {
    normalize: `${normalizeCSS}`,
    'normalize-legacy': `${normalizeLegacyCSS}`,
    remedy: `${remedyCSS}`
  },
  OPTIONS: any = {
    saneEmbeds: `
      img, svg, video, canvas, audio, iframe, embed, object {
        display: inline-block;
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
    reduceMotion: `
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
  base?: keyof typeof BASE | null;
  saneEmbeds?: boolean;
  hiddenProp?: boolean;
  reduceMotion?: boolean;
  fontSmoothing?: boolean;
  resetMargins?: boolean;
  resetHeadings?: boolean;
};

export function normalize({
  base = 'normalize',
  saneEmbeds = true,
  hiddenProp = true,
  reduceMotion = true,
  ...props
}: NormalizeProps) {
  const features: any = { hiddenProp, reduceMotion, ...props };

  return `
    ${base ? BASE[base] : ''}
    ${saneEmbeds && base !== 'remedy' ? OPTIONS.saneEmbeds : ''}
    ${Object.keys(features)
      .map((prop) => features[prop] && OPTIONS[prop])
      .filter(Boolean)
      .join('')}
  `;
}
