const FONT_TYPES = {
  woff: 'woff',
  woff2: 'woff2',
  ttf: 'truetype',
  otf: 'opentype',
  eot: 'embedded-opentype',
  svg: 'svg'
} as const;

type FileFormats = keyof typeof FONT_TYPES;

/**
 * Font face declaration generator
 * @param name Name of the font family
 * @param filePath Path to the font file (without file extension)
 * @param options Font options
 */
export function fontFace(
  name: string,
  filePath: string,
  opts?: {
    formats: any;
    weight?: string | number;
    style?: string;
    display?: string;
  }
) {
  const options = {
    formats: ['woff2', 'woff'],
    weight: 'normal',
    style: 'normal',
    display: 'swap',
    ...opts
  };

  function getFormat(val: FileFormats, type: string) {
    const isExt = Object.keys(FONT_TYPES).includes(val);

    switch (type) {
      case 'extension':
        return isExt
          ? val
          : Object.keys(FONT_TYPES).find((ext) => FONT_TYPES[ext] === val);
      case 'format':
        return isExt ? FONT_TYPES[val] : val;
      default:
        return '';
    }
  }

  return `
  @font-face {
    font-family: "${name}";
    src: ${options.formats
      .map(
        (format: FileFormats) =>
          `url("${filePath}.${getFormat(
            format,
            'extension'
          )}") format("${getFormat(format, 'format')}")`
      )
      .join(',\n')};
    font-weight: ${options.weight};
    font-style: ${options.style};
    font-display: ${options.display};
  }
  `;
}
