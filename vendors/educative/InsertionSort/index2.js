"use strict";
/*
Loop over each item, and for each item insert it into the sorted portion of the array
*/
Object.defineProperty(exports, "__esModule", { value: true });
const insertItem2 = function (arr, item) {
    const arrLength = arr.length;
    for (let i = 0; i <= arrLength; i++) {
        if (i === arrLength || arr[i] > item) {
            arr.splice(i, 0, item);
            break;
        }
    }
    return arr;
};
const insertionSort2 = function (arr) {
    const arrLength = arr.length;
    const sorted = [];
    for (let i = 0; i < arrLength; i++) {
        insertItem2(sorted, arr[i]);
    }
    return sorted;
};
module.exports = {
    insertItem2,
    insertionSort2
};
//# sourceMappingURL=index2.js.map