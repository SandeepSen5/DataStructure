

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      let currentValue = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > currentValue) {
        array[j + 1] = array[j];
        j--;    
      }
      array[j + 1] = currentValue;
    }
    return array;
  }
  let myArray = [5, 2, 4, 6, 1, 3];
console.log(insertionSort(myArray));   



// function insertionsort(array) {
//   for (let i = 1; i < array.length; i++) {
//     let current = array[i];
//     let j = i - 1;
//     while (j >= 0 && array[j] > current) {
//       array[j + 1] = array[j];
//       j--;
//     }
//     array[j+1] = current;
//   }
//   return array;
// }
// let array = [5, 2, 4, 6, 1, 3];
// let sort1 = insertionsort(array);
// console.log(sort1);



