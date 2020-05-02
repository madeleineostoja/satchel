const Color = require('color');

/**
 * Generate rgba colours from a hex code
 * @param hex Hex code
 * @param alpha Alpha amout
 */
export function rgba(hex: string, alpha = 1) {
  return Color(hex).alpha(alpha).rgb().string();
}

/**
 * Generate Hex colours from an rgb(a) string
 * @param r Red channel
 * @param g Green channel
 * @param b Blue channel
 */
export function hex(r: number, g: number, b: number) {
  return Color({ r, g, b }).hex();
}
