//example JavaScript code to implement a hash table using an array


class HashTable {
  constructor() {
    this.table = new Array(137); // create an array with a length of 137
    this.values = [];
    this.numitems = 0;
  }

  // hash function to calculate index for a given key
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.table.length;
  }


  // put method to add a key-value pair to the hash table
  put(key, value) {
    const index = this.hash(key);
    this.table[index] = key;
    this.values[index] = value;
    this.numitems++;
  
  }

  // get method to retrieve the value associated with a given key
  get(key) {
    const index = this.hash(key);
    if (this.table[index] === key) {
      return this.values[index];
    } 
    return undefined;
  }

  // remove method to remove a key-value pair from the hash table
  remove(key) {
    const index = this.hash(key);
    if (this.table[index] === key) {
      delete this.table[index];
      delete this.values[index];
      this.numitems--;
    }
  }
}

// Create a new hash table
const hashTable = new HashTable();

// Add key-value pairs to the hash table
hashTable.put('John', 123);
hashTable.put('Mary', 456);
hashTable.put('Bob', 789);

// Retrieve values using keys
console.log(hashTable.get('John')); // Output: 123
console.log(hashTable.get('Mary')); // Output: 456
console.log(hashTable.get('Bob')); // Output: 789

// Remove a key-value pair
hashTable.remove('Mary');

// Try to retrieve the value again
console.log(hashTable.get('Mary')); // Output: undefined










