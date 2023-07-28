
class Stack {
    constructor() { 
        this.items = []; // initialize the stack as an empty array
    }

    // push method adds an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // pop method removes and returns the element at the top of the stack
    pop() {
        if (this.items.length == 0) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // peek method returns the element at the top of the stack without removing it
    peek() {
        return this.items[this.items.length - 1];
    }

    // isEmpty method returns true if the stack is empty, false otherwise
    isEmpty() {
        return this.items.length == 0;
    }

    // size method returns the number of elements in the stack
    size() {
        return this.items.length;
    }

    // print method displays the elements of the stack
    print() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        console.log(str);
    }
}

// Example usage
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Output: "10 20 30"
console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.isEmpty()); // Output: false
console.log(stack.size()); // Output: 2
stack.print(); // Output: "10 20"