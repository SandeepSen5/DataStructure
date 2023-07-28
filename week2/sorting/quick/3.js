function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // base case
    } else {
        const pivot = arr[0];
        const left = [];
        const right = [];
         
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return quickSort(left).concat(pivot, quickSort(right));
    }
}
const arr = [1, 3, 5,9,3,5,6];
const sortedArr = quickSort(arr);
console.log(sortedArr);