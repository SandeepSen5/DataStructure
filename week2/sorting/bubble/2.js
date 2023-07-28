//Write a program to implement Bubble Sort on a stack of integers in javascript

function bubbleSort(stack) {
  const len = stack.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (stack[j] > stack[j + 1]) {
        // Swap the elements
        const temp = stack[j];
        stack[j] = stack[j + 1];
        stack[j + 1] = temp;
      }
    }
  }
  return stack;
}

// Example usage
const stack = [3, 5, 1, 2, 4];
console.log(`Original stack: ${stack}`);

const sortedStack = bubbleSort(stack);
console.log(`Sorted stack: ${sortedStack}`); 