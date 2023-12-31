//ascending order

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    if ( index !== i) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }
  return arr;
}

const arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr));

