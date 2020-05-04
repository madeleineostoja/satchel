function rgbToHex(r: number, g: number, b: number): string {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function hexToRgb(hexString: string): number[] {
  const hex = hexString.replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => r + r + g + g + b + b
    ),
    rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!rgb) {
    return [];
  }

  return rgb.slice(1).map((val) => parseInt(val, 16));
}

/**
 * Generate rgba colours from a hex code
 * @param hex Hex code
 * @param alpha Alpha amout
 */
export function rgba(hex: string, alpha = 1) {
  return `rgba(${hexToRgb(hex)}, ${alpha})`;
}

/**
 * Generate Hex colours from an rgb(a) string
 * @param r Red channel
 * @param g Green channel
 * @param b Blue channel
 */
export function hex(r: number, g: number, b: number) {
  return rgbToHex(r, g, b);
}
