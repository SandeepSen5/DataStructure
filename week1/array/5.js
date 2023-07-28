function findRepeatedElements(array) {
  const frequencyMap = new Map();
  const repeatedElements = []; 

  // Count the frequency of each element
  array.forEach((element) => {
    if (frequencyMap.has(element)) {
      frequencyMap.set(element, frequencyMap.get(element) + 1);
    } else {
      frequencyMap.set(element, 1);
    }
  });

  // Find the repeated elements
  frequencyMap.forEach((frequency, element) => {
    if (frequency > 1) {
      repeatedElements.push(element);
    }
  });

  return repeatedElements;
}

// Example usage
const array = [2, 4, 6, 8, 2, 9, 4, 2, 6];
const result = findRepeatedElements(array);
console.log("Repeated elements in the array:", result);
