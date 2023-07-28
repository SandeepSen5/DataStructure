//example JavaScript code to implement a hash table using an object

// class HashTable {
//     constructor() {
//         this.table = {};
//     }
//     hash(key) {
//         let hashvalue = 0;
//         for (let i = 0; i < key.length; i++) {
//             hashvalue += key.charCodeAt(i);
//         }
//         return hashvalue  ;
//     }
//     put(key, value) {
//         let index = this.hash(key);
//         this.table[index] = { key, value };
//     }
//     get(key) {
//         let index = this.hash(key);
//         if (this.table[index] && this.table[index].key == key) {
//             return this.table[index].value
//         }
//         else {
//             return -1;
//         }
//     }
//     remove(key) {
//         let index = this.hash(key);
//         if (this.table[index] && this.table[index].key == key) {
//             delete this.table[index];
//         }
//     }
// }
// const hashTable = new HashTable();
// hashTable.put('apple', 1);
// hashTable.put('banana', 2);
// hashTable.put('cherry', 3);
// console.log(hashTable.get('banana'));
// console.log(hashTable.table);
// hashTable.remove('cherry');
// console.log(hashTable.get('cherry'));


//example JavaScript code to implement a hash table using an array

class Hashtable {
    constructor() {
        this.table = new Array(137);
        this.values = [];
    }
    hash(key) {
        let hashvalue = 0;
        for (let i = 0; i < key.length; i++) {
            hashvalue += key.charCodeAt(i);
        }
        return hashvalue % this.table.length;
    }
    put(key, value) {
        let index = this.hash(key);
        this.table[index] = key;
        this.values[index] = value
    }
    get(key) {
        let index = this.hash(key);
        if (this.table[index] == key) {
            return this.values[index];
        } else {
            return undefined;
        }
    }
    remove(key) {
        let index = this.hash(key);
        if (this.table[index] == key) {
            delete this.table[index];
            delete this.values[index];
        }
    }
}
const hashTable= new Hashtable();
hashTable.put('John', 123);
hashTable.put('Mary', 456);
hashTable.put('Bob', 789);
console.log(hashTable.get('John'));
console.log(hashTable.get('Mary')); 
console.log(hashTable.get('Bob'));
hashTable.remove('Mary');
  
  // Try to retrieve the value again
  console.log(hashTable.get('Mary')); // Output: undefined