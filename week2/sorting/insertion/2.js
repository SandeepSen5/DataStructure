//Program that takes an array of strings as input and sorts it using insertion sort in alphabetical order

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j+1] = arr[j];
        j--;
      }
      arr[j+1] = key;
    }
    return arr;
  }
  let myArr = ["cat", "dog", "bird", "fish", "ant"];
  console.log(insertionSort(myArr));



  