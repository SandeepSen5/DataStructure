
//hash table with separate chaining using linked lists in javascript

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor() {
        this.table = new Array(10); // choose initial table size
        this.tableSize = 10;
    }

    hashFunction(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % this.tableSize;
        }
        return hash;
    }

    insert(key, value) {
        const index = this.hashFunction(key);
        const newNode = new Node(key, value);
        if (!this.table[index]) {
            this.table[index] = newNode;
        } else {
            let current = this.table[index];
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    search(key) {
        const index = this.hashFunction(key);
        let current = this.table[index];
        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    }

    delete1(key) {
        const index = this.hashFunction(key);
        let prev = null;
        let current = this.table[index];
        while (current) {
            if (current.key === key) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    this.table[index] = current.next;
                }
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }

    printTable() {
        for (let i = 0; i < this.tableSize; i++) {
            let current = this.table[i];
            if (!current) {
                console.log(`[${i}]: null`);
            } else {
                let str = `[${i}]: `;
                while (current) {
                    str += `${current.key}=${current.value} -> `;
                    current = current.next;
                }
                str += 'null';
                console.log(str);
            }
        }
    }
}

// Example usage:
const ht = new HashTable();
ht.insert('apple', 3);
ht.insert('banana', 2);
ht.insert('cherry', 5);
ht.insert('date', 1);
ht.insert('elderberry', 4);
ht.printTable();
console.log(ht.delete1('cherry'));
console.log(ht.search('cherry')); // outputs 5
console.log(ht.search('fig')); // outputs null




