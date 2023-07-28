//search insert delete an element in an array using hash table 


class HashTable {
    constructor() {
        this.table = {};
    }

    hashKey(key) {
        // Simple hash function to map keys to table indices
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash;
    }


    insertArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            const key = arr[i].toString();
            const hash = this.hashKey(key);
            if (!this.table[hash]) {
                this.table[hash] = [i];
            } else {
                this.table[hash].push(i);
            }
        }
    }


    searchArray(value) {
        const key = value.toString();
        const hash = this.hashKey(key);
        const indices = this.table[hash];
        console.log(indices, "aaaaaaaaa");
        if (!indices) {
            return -1;
        }
        for (let i = 0; i < indices.length; i++) {
            if (arr[indices[i]] === value) {
                return indices[i];
            }
        }
    }


    deleteArray(value) {
        const key = value.toString();
        const hash = this.hashKey(key);
        const indices = this.table[hash];
        if (!indices) {
            return false;
        }
        for (let i = 0; i < indices.length; i++) {
            if (arr[indices[i]] === value) {
                arr.splice(indices[i], 1);
                indices.splice(i, 1);
                return true;
            }
        }
        return false;
    }
}

// Example usage
const arr = [2, 3, 7, 1, 8, 0, 5];
const hashTable = new HashTable();
hashTable.insertArray(arr);

console.log(hashTable.searchArray(7)); // Output: 2
console.log(hashTable.searchArray(6)); // Output: -1

hashTable.deleteArray(8);
console.log(arr); // Output: [1, 2, 3, 5]







