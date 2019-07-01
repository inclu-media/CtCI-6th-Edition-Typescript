/**
 * Given two strings, write a method to decide if one is a permutation
 * of the other.
 */

/**
 * Assumption: the check is case sensitive and blanks are handled as regular characters.
 * Idea: sort both strings. If the sorted strings are equal then s2 is a permutation of s1.
 * @param s1
 * @param s2
 */
export function checkPermutation(s1: string, s2: string): boolean {
  if (s1.length === s2.length) {
    const s1sorted = s1
      .split('')
      .sort()
      .join('');
    const s2sorted = s2
      .split('')
      .sort()
      .join('');
    return s1sorted === s2sorted;
  }
  return false;
}
