//descending order


function insertsort(array) {
    for (let i = 0; i < array.length; i++) {
      let minindex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] > array[minindex]) {
          minindex = j;
        }
      }
      if (minindex != i) {
        [array[i], array[minindex]] = [array[minindex], array[i]];
      }
    }
    return array;
  }
  let array = [64, 25, 12, 22, 11];
  let sort1 = insertsort(array);
  console.log(sort1);
