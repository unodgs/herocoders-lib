/**
 * Calculates circle area
 * @param   {number} radius Circle radius
 * @returns {number}        Circle area or 0 for invalid radius
 */
export function circleArea(radius) {
  if (!Number.isFinite(radius)) {
    return 0
  }
  return Math.PI * radius ** 2
}

/**
 * Checks if the first char of a given string belongs to A-Z range. 
 * Might not work correctly for strings containing surrogate pairs
 * (two UTF-16 values forming one visible glyph)
 * @param   {string} str String
 * @returns {boolean}    true if first char belongs to A-Z range, otherwise false
 */
export function startsWithAZChar(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return false
  }
  return str[0] >= 'A' && str[0] <= 'Z'
} 
