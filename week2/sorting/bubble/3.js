// Bubble Sort function for array of strings

function bubbleSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// Testing the bubbleSort function
let arr = ["apple", "orange", "banana", "grape", "kiwi"];

console.log("Unsorted array: " + arr);

let sortedArr = bubbleSort(arr);

console.log("Sorted array: " + sortedArr);