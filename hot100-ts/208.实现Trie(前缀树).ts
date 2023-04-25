type TrieTreeNode = {
  [key: string]: TrieTreeNode;
}&{
  isEnd?: boolean;
};
class Trie {
  private treeNode:TrieTreeNode;
  constructor() {
    this.treeNode = {}
  }

  insert(word: string): void {
    let node = this.treeNode;
    for(const s of word){
      if(!node[s]){
        node[s] = {};
      }
      node = node[s];
    }
    node.isEnd = true;
  }

  search(word: string): boolean {
    let node = this.treeNode;
    for(let s of word){
      if(!node[s]){
        return false;
      }
      node = node[s];
    }
    return node.isEnd?true:false;
  }

  startsWith(prefix: string): boolean {
    let node = this.treeNode;
    for(let s of prefix){
      if(!node[s]){
        return false;
      }
      node = node[s];
    }
    return true;
  }
}

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/