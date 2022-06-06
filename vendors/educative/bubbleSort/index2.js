"use strict";
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