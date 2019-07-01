/**
 * Implement an algorithm to determine is a string has all unique characters.
 * What if you cannot use additional data structures?
 */

/**
 * Sorting the string and checking duplicates.
 * @param s
 */

export function isUniqueSort(s: string): boolean {
  const arr = s.split('');
  arr.sort();
  for (let x = 1; x < arr.length; x++) {
    if (arr[x] === arr[x - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * Using a sparsely populated array of booleans marking the
 * occurrence of a character
 * @param s
 */
export function isUniqueArray(s: string): boolean {
  const marker: boolean[] = [];
  for (let x = 0; x < s.length; x++) {
    const charCode = s.charCodeAt(x);
    if (!marker[charCode]) {
      marker[charCode] = true;
    } else {
      return false;
    }
  }
  return true;
}
