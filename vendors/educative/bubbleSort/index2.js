"use strict";
/*
Time complexity
Worse case / Average case
O(n^2)
If array is in exact reverse order, for each item (n), make on average n/2 comparisons.

Best case
O(n)
If array is already sorted, make n number of comparisons.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const swap = function (arr, idxA, idxB) {
    const temp = arr[idxA];
    arr[idxA] = arr[idxB];
    arr[idxB] = temp;
    return arr;
};
const bubbleSort2 = function (arr) {
    const arrLength = arr.length;
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < arrLength; i++) {
            if (arr[i] > arr[i + 1]) {
                arr = swap(arr, i, i + 1);
                swapped = true;
            }
        }
    }
    return arr;
};
module.exports = bubbleSort2;
//# sourceMappingURL=index2.js.map