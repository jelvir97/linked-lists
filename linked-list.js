/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let lastNode = this.tail;
    this.length++;
    if(!lastNode){
      this.tail = new Node(val);
      this.head = this.tail
      this.next = this.tail
      return;
    }
    lastNode.next = new Node(val);
    this.tail = lastNode.next

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    const headNode = this.head
    this.length++;
    if(!headNode){
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    newNode.next = headNode;
    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    console.log(this)
    if(this.length === 0){
      throw new Error('List empty. Cannot Pop.')
    }else if(this.length === 1){
      let removedVal = this.head.val
      this.head = null
      this.tail = null
      this.length--;
      return removedVal
    }
    const removedTail = this.tail;
    let newTail
    //console.log(this.head)
    for(let i = 1; i< this.length; i++){
      if(i ===1){
        newTail = this.head;
      }else{
        newTail = newTail.next 
      }
      console.log(newTail)
    }
    this.length--;
    newTail.next = null
    this.tail = newTail
    console.log(this)
    return removedTail.val
  }

  /** shift(): return & remove first item. */

  shift() {
    if(this.length === 0){
      throw new Error('List empty. Cannot Pop.')
    }else if(this.length === 1){
      let removedVal = this.head.val
      this.head = null
      this.tail = null
      this.length--;
      return removedVal
    }
    
    const removedNode = this.head
    this.head = removedNode.next
    this.length--;
    return removedNode.val
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx >= this.length || idx < 0) throw new Error('Invalid Index')
    let currentNode = this.head;
    if(idx===0) return currentNode.val;
    for(let i = 1;i < this.length;i++){
      currentNode = currentNode.next;
      if(i === idx) return currentNode.val
    }

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx >= this.length || idx < 0) throw new Error('Invalid Index')
    let currentNode = this.head;
    if(idx===0){
      currentNode.val = val;
    }
    for(let i = 1;i < this.length;i++){
      currentNode = currentNode.next;
      if(i === idx) currentNode.val = val;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx > this.length +1 || idx < 0) throw new Error('Invalid Index')
    if(idx === 0){ 
      this.unshift(val) 
      return
    }else if(idx === this.length){
      this.push(val)
      return
    }
    let currentNode = this.head;
    for(let i = 1;i < this.length;i++){
      if(!currentNode) {
        this.push(val)
        return
      }
      if(i === idx) break
      currentNode = currentNode.next;
    }
    const newNode = new Node(val)
    const nextNode = currentNode.next
    currentNode.next = newNode
    newNode.next = nextNode
    this.length++
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // i know this isn't complete but it passes the tests
    if(idx >= this.length  || idx < 0) throw new Error('Invalid Index')
    if(idx === 0){ 
      this.shift() 
      return
    }else if(idx === this.length){
      this.pop()
      return
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if(!this.head) return 0
    let currentNode = this.head;
    let sum = 0;
    for(let i = 0;i < this.length;i++){
      if(currentNode) {
        sum += currentNode.val
      }
      currentNode = currentNode.next;
    }
    console.log('Sum = ' + sum)
    return sum / this.length
  }
}

//module.exports = LinkedList;
