//right rotation of an array by d positions:

function rotateArrayRight(arr, d) {
    // get the length of the array
    const n = arr.length;
    // calculate the actual number of rotations required
    d = d % n;
    // if the number of rotations is 0, return the original array
    if (d === 0) {
        return arr;
    }
    // create a new array to store the rotated elements
    const rotated = [];
    // copy the last d elements to the beginning of the rotated array
    for (let i = 0; i < d; i++) {
        rotated[i] = arr[n - d + i];
    }
    // copy the remaining elements to the rotated array
    for (let i = d; i < n; i++) {
        rotated[i] = arr[i - d];
    }
    return rotated;
}
// Example usage:
const arr = [1, 2, 3, 4, 5];
const d = 2;
const rotatedArr = rotateArrayRight(arr, d);
console.log(rotatedArr); 