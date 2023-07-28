
class Trie {
    constructor() {
      this.root = new Map();
    }
  
    insert(word) {
      let node = this.root;
  
      for (let char of word) {
        if (!node.has(char)) {
          node.set(char, new Map());
        }
        node = node.get(char);
      }
  
      node.set('$', true);
    }
  
    search(word) {
      let node = this.root;
  
      for (let char of word) {
        if (!node.has(char)) {
          return false;
        }
        node = node.get(char);
      }
  
      return node.has('$');
    }
  
    startsWith(prefix) {
      let node = this.root;
  
      for (let char of prefix) {
        if (!node.has(char)) {
          return false;
        }
        node = node.get(char);
      }
  
      return true;
    }
  
    searchSubstring(substring) {
      let node = this.root;
  
      for (let char of substring) {
        if (!node.has(char)) {
          return false;
        }
        node = node.get(char);
      }
  
      return true;
    }
  }
  
  const trie = new Trie();
  
  trie.insert('hello');
  trie.insert('world');
  trie.insert('hey');
  trie.insert('howdy');
  
  console.log(trie.searchSubstring('he'));    // true
  console.log(trie.searchSubstring('worl'));  // false
  console.log(trie.searchSubstring('how'));   // true
  console.log(trie.searchSubstring('heyy'));  // fals 