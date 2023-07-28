
class TrieNode {
    constructor() {
        this.isEndOfWord = false;
        this.children = new Map();
    }
} 

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let currentNode = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word.charAt(i);
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode());
            }
            currentNode = currentNode.children.get(char);
        }
        currentNode.isEndOfWord = true;
    }

    search(word) {
        let currentNode = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word.charAt(i);
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char);
        }
        return currentNode.isEndOfWord;
    }

    startsWith(prefix) {
        let currentNode = this.root;
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix.charAt(i);
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char);
        }
        return true;
    }

    delete(word) {
        const deleteHelper = (node, index) => {
            if (index === word.length) {
                if (!node.isEndOfWord) {
                    return false;
                }
                node.isEndOfWord = false;
                return node.children.size === 0;
            }
            const char = word.charAt(index);
            if (!node.children.has(char)) {
                return false;
            }
            const childNode = node.children.get(char);
            const isDeleteNode = deleteHelper(childNode, index + 1);
            if (isDeleteNode) {
                node.children.delete(char);
                return node.children.size === 0;
            }
            return false;
        };
        deleteHelper(this.root, 0);
    }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // true
console.log(trie.search("app"));     // false
console.log(trie.startsWith("app")); // true
trie.delete("apple");
console.log(trie.search("apple"));   // false