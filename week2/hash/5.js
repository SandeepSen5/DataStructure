//to resize a hash table using javascript


// class HashTable {
//     constructor(initialCapacity = 8, loadFactor = 0.75) {
//       this.table = new Array(initialCapacity);
//       this.size = 0;
//       this.loadFactor = loadFactor;
//     }
  
//     hash(key) {
//       let hashValue = 0;
  
//       for (let i = 0; i < key.length; i++) {
//         const charCode = key.charCodeAt(i);
//         hashValue = (hashValue << 5) + hashValue + charCode;
//         hashValue &= hashValue;
//       }
//       return hashValue;
//     }
  
//     resize() {
//       const oldTable = this.table;
//       const oldSize = this.size;
  
//       // Create a new, larger table
//       this.table = new Array(oldSize * 2);
//       this.size = 0;
  
//       // Rehash all of the old key-value pairs into the new table
//       for (let i = 0; i < oldTable.length; i++) {
//         if (oldTable[i] !== undefined) {
//           for (let j = 0; j < oldTable[i].length; j++) {
//             const [key, value] = oldTable[i][j];
//             this.set(key, value);
//           }
//         }
//       }
//     } 
  
//     set(key, value) {
//       const loadFactor = this.size / this.table.length;
  
//       if (loadFactor > this.loadFactor) {
//         this.resize();
//       }
  
//       const index = this.hash(key) % this.table.length;
  
//       if (this.table[index] === undefined) {
//         this.table[index] = [[key, value]];
//         this.size++;
//       } else {
//         for (let i = 0; i < this.table[index].length; i++) {
//           if (this.table[index][i][0] === key) {
//             this.table[index][i][1] = value;
//             return;
//           }
//         }
  
//         this.table[index].push([key, value]);
//         this.size++;
//       }
//     }
  
//     get(key) {
//       const index = this.hash(key) % this.table.length;
  
//       if (this.table[index] === undefined) {
//         return undefined;
//       }
  
//       for (let i = 0; i < this.table[index].length; i++) {
//         if (this.table[index][i][0] === key) {
//           return this.table[index][i][1];
//         }
//       }
  
//       return undefined;
//     }
  
//     delete(key) {
//       const index = this.hash(key) % this.table.length;
  
//       if (this.table[index] === undefined) {
//         return false;
//       }
  
//       for (let i = 0; i < this.table[index].length; i++) {
//         if (this.table[index][i][0] === key) {
//           this.table[index].splice(i, 1);
//           this.size--;
//           return true;
//         }
//       }
  
//       return false;
//     }
//   }





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
    const loadFactor = this.numitems / this.table.length;
    if (loadFactor > 0.7) {
      this.rehash();
    }
    let index = this.hash(key);
    while (this.table[index] !== undefined) {
      if (this.table[index] === key) {
        this.values[index] = value;
        return;
      }
      index++;
      if (index === this.table.length) {
        index = 0;
      }
    }
    this.table[index] = key;
    this.values[index] = value;
    this.numitems++;
  }    

  // get method to retrieve the value associated with a given key
  get(key) {
    let index = this.hash(key);
    while (this.table[index] !== undefined) {
      if (this.table[index] === key) {
        return this.values[index];
      }
      index++;
      if (index === this.table.length) {
        index = 0;
      }
    }
    return undefined;
  }

  // remove method to remove a key-value pair from the hash table
  remove(key) {
    let index = this.hash(key);
    while (this.table[index] !== undefined) {
      if (this.table[index] === key) {
        delete this.table[index];
        delete this.values[index];
        this.numitems--;
        return;
      }
      index++;
      if (index === this.table.length) {
        index = 0;
      }
    }
  }

  // rehash method to resize the hash table and rehash all the keys
  rehash() {
    const oldTable = this.table;
    const oldValues = this.values;
    this.table = new Array(oldTable.length * 2);
    this.values = [];
    this.numitems = 0;
    for (let i = 0; i < oldTable.length; i++) {
      if (oldTable[i] !== undefined) {
        this.put(oldTable[i], oldValues[i]);
      }
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