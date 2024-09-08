/**
 * Searches for a target number in an array using linear search, binary search, and recursive binary search.
 * 
 * @example
 * // Input: numbers = [1, 2, 3, 4, 5], target = 3
 * // Output: 
 * //   Linear Search: Found at index 2
 * //   Binary Search: Found at index 2
 * //   Recursive Binary Search: Found at index 2
 */
function searchNumbers() {
    debugger
    const input = document.getElementById('numbers').value;
    const arr = input.split(',').map(Number);
    const target = parseInt(document.getElementById('target').value);

    document.getElementById('linear').innerText = linearSearch(arr, target);
    document.getElementById('binary').innerText = binarySearch(arr, target);
    document.getElementById('recursiveBinary').innerText = recursiveBinarySearch(arr, target, 0, arr.length - 1);
}

/**
 * Performs a linear search on an array to find a target number.
 * 
 * @param {number[]} arr - The array to search.
 * @param {number} target - The target number to find.
 * @returns {string} - The index of the target number if found, or "Not found" if not.
 * 
 * @example
 * // Input: arr = [1, 2, 3, 4, 5], target = 3
 * // Output: Found at index 2
 */
function linearSearch(arr, target) {
    debugger
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return `Found at index ${i}`;
        }
    }
    return "Not found";
}

/**
 * Performs a binary search on an array to find a target number.
 * 
 * @param {number[]} arr - The array to search.
 * @param {number} target - The target number to find.
 * @returns {string} - The index of the target number if found, or "Not found" if not.
 * 
 * @example
 * // Input: arr = [1, 2, 3, 4, 5], target = 3
 * // Output: Found at index 2
 */
function binarySearch(arr, target) {
    arr.sort((a, b) => a - b);
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return `Found at index ${mid}`;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return "Not found";
}

/**
 * Performs a recursive binary search on an array to find a target number.
 * 
 * @param {number[]} arr - The array to search.
 * @param {number} target - The target number to find.
 * @param {number} left - The left index of the current search range.
 * @param {number} right - The right index of the current search range.
 * @returns {string} - The index of the target number if found, or "Not found" if not.
 * 
 * @example
 * // Input: arr = [1, 2, 3, 4, 5], target = 3, left = 0, right = 4
 * // Output: Found at index 2
 */
function recursiveBinarySearch(arr, target, left, right) {
    arr.sort((a, b) => a - b);
    if (left > right) {
        return "Not found";
    }
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
        return `Found at index ${mid}`;
    } else if (arr[mid] < target) {
        return recursiveBinarySearch(arr, target, mid + 1, right);
    } else {
        return recursiveBinarySearch(arr, target, left, mid - 1);
    }
}