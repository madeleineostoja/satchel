const FORMATS = {
  woff: 'woff',
  woff2: 'woff2',
  ttf: 'truetype',
  otf: 'opentype',
  eot: 'embedded-opentype',
  svg: 'svg'
} as any;

/**
 * Font face declaration generator
 * @param name Name of the font family
 * @param files Array of file paths
 * @param options Font options
 */
export function fontFace(
  name: string,
  files: string[],
  opts?: {
    weight?: string | number;
    style?: string;
    display?: string;
  }
) {
  const options = {
    display: 'swap',
    ...opts
  };

  function formatFile(file: any) {
    return file && `url("${file}") format("${FORMATS[file.split('.').pop()]}")`;
  }

  return `
  @font-face {
    font-family: "${name}";
    src: ${files.map(formatFile).filter(Boolean).join(',\n')};
    ${options.weight ? `font-weight: ${options.weight};` : ''}
    ${options.style ? `font-style: ${options.style};` : ''}
    font-display: ${options.display};
  }
  `;
}
