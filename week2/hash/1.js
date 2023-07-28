//example JavaScript code to implement a hash table using an object

class HashTable {
    constructor() {
        this.table = {};
    }
 
    // Hash function to map a key to an index in the hash table
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37; // Use prime number for better distribution of keys
    }

    // Add a key-value pair to the hash table
    put(key, value) {
        const index = this.hash(key);
        this.table[index] = { key, value };
    }

    // Get the value of a key in the hash table
    get(key) {
        const index = this.hash(key);
        if (this.table[index] && this.table[index].key === key) {
            return this.table[index].value;
        } else {
            return undefined;
        }
    }

    // Remove a key-value pair from the hash table
    remove(key) {
        const index = this.hash(key);
        if (this.table[index] && this.table[index].key === key) {
            delete this.table[index];
        }
    }
}



// Example usage of the hash table
const hashTable = new HashTable();
hashTable.put('apple', 1);
hashTable.put('banana', 2);
hashTable.put('cherry', 3);
console.log(hashTable.get('banana')); // Output: 2
hashTable.remove('cherry');
console.log(hashTable.get('cherry')); // Output: undefined






