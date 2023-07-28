//To find the first and last occurrence of a given element in a sorted array
function findFirstOccurrence(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === x) {
            result = mid;
            right = mid - 1; // search the left half for first occurrence
        } else if (arr[mid] < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}
function findLastOccurrence(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === x) {
            result = mid;
            left = mid + 1; // search the right half for last occurrence
        } else if (arr[mid] < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}
let arr = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 8];
let a = findFirstOccurrence(arr, 1);
let b = findLastOccurrence(arr, 1);
console.log(a, b)