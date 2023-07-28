function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Found the target at index mid
        } else if (arr[mid] < target) {
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }
    return -1; // Target is not found in the array
}

// Example usage
const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetValue = 23;


const resultIndex = binarySearch(sortedArray, targetValue);
if (resultIndex !== -1) {
    console.log("Target found at index", resultIndex);
} else {
    console.log("Target not found in the array.");
}


