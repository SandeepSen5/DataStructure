
function mergeSort(array) {

    if (array.length <= 1) {
        return array;
    }
    
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    const sortedLeftArray = mergeSort(leftArray);
    const sortedRightArray = mergeSort(rightArray);

    return merge(sortedLeftArray, sortedRightArray);
}


function merge(leftArray, rightArray) {
    const resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            resultArray.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(rightArray[rightIndex]);
            rightIndex++; 
        }
    }
    return resultArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
}

// Example usage:
const unsortedArray = [6, 2, 7, 3, 8, 9, 1, 5, 4];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9] 
