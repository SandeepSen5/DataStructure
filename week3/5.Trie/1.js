
class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = '*';
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  populateSuffixTrie(str) {
    for (let i = 0; i < str.length; i++) {
      this.insert(i, str);
    }
  }

  insert(index, str) {
    let node = this.root;
    for (let i = index; i < str.length; i++) {
      const char = str[i];
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.children.set(this.isEndOfWord, null);
  }

  search(str) {
    let node = this.root;
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return node.children.has(this.isEndOfWord);
  }
}

const trie = new Trie();
trie.populateSuffixTrie('mannan');
console.log(trie.search('an'));











