function leftRotate(arr, d) {
    // Calculate the actual number of positions to rotate by
    const n = arr.length;
    d = d % n;
    // Rotate the array in-place using a temporary array
    const temp = [];
    for (let i = 0; i < d; i++) {
        temp[i] = arr[i];
    }
    for (let i = d; i < n; i++) {
        arr[i - d] = arr[i];
    }
    for (let i = 0; i < d; i++) {
        arr[n - d + i] = temp[i];
    }
    return arr;
}

const arr = [1, 2, 3, 4, 5];
const d = 2;
const result = leftRotate(arr, d);
console.log(result);