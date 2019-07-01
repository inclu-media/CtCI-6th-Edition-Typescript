"use strict";
/**
 * Implement an algorithm to determine is a string has all unique characters.
 * What if you cannot use additional data structures?
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sorting the string and checking duplicates.
 * @param s
 */
function isUniqueSort(s) {
    const arr = s.split('');
    arr.sort();
    for (let x = 1; x < arr.length; x++) {
        if (arr[x] === arr[x - 1]) {
            return false;
        }
    }
    return true;
}
exports.isUniqueSort = isUniqueSort;
/**
 * Using a sparsely populated array of booleans marking the
 * occurance of a character
 * @param s
 */
function isUniqueArray(s) {
    const marker = [];
    for (let x = 0; x < s.length; x++) {
        const charCode = s.charCodeAt(x);
        if (!marker[charCode]) {
            marker[charCode] = true;
        }
        else {
            return false;
        }
    }
    return true;
}
exports.isUniqueArray = isUniqueArray;
//# sourceMappingURL=1_1_IsUnique.js.map