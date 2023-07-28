//reverse a string using a stack

function reverseString(str) {
    let stack = [];
    let reversedString = "";
  
    // Push each character of the string onto the stack
    for (let i = 0; i < str.length; i++) {
      stack.push(str[i]);
    }

    // Pop each character off the stack and append to reversedString
    while (stack.length > 0) {
      reversedString += stack.pop();
    }
    return reversedString;
  }
  // Example usage
  let myString = "hello world";
  let reversedString = reverseString(myString);
  console.log(reversedString);




  