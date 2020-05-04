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
 * @param family Name of the font family
 * @param path Path to the font file (without file extension)
 * @param formats Array of formats to generate
 * @param options Font options
 */
export function fontFace(
  family: string,
  path: string,
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
    font-family: "${family}";
    src: ${formats
      .map(
        (format) => `url("${path}.${format}") format("${FONT_TYPES[format]}")`
      )
      .join(',\n')};
    font-weight: ${options.weight};
    font-style: ${options.style};
    font-display: ${options.display};
  }
  `;
}
