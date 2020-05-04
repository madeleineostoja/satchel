const FONT_TYPES: any = {
  woff: 'woff',
  woff2: 'woff2',
  ttf: 'truetype',
  otf: 'opentype',
  eot: 'embedded-opentype',
  svg: 'svg'
};

/**
 * Font face declaration generator
 * @param name Name of the font family
 * @param filePath Path to the font file (without file extension)
 * @param formats Array of formats to generate
 * @param options Font options
 */
export function fontFace(
  name: string,
  filePath: string,
  formats = ['woff, woff2'],
  opts?: { weight?: string | number; style?: string; display?: string }
) {
  const options = {
    weight: 'normal',
    style: 'normal',
    display: 'swap',
    ...opts
  };

  return `
  @font-face {
    font-family: "${name}";
    src: ${formats
      .map(
        (format) =>
          `url("${filePath}.${format}") format("${FONT_TYPES[format]}")`
      )
      .join(',\n')};
    font-weight: ${options.weight};
    font-style: ${options.style};
    font-display: ${options.display};
  }
  `;
}
