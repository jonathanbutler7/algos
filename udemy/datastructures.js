// ================================================
// SECTION 18 DATA STRUCTURES INTRODUCTION
// ================================================

// a CLASS is a blueprint for creating objects with predefined properties and methods

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
}

// let firstStudent = new Student('Jonathan', 'Butler', 9);

class Animal {
  constructor(arms, legs, nose) {
    this.arms = arms;
    this.legs = legs;
    this.nose = nose;
  }
}

let kitty = new Animal(4, 2, true);

// method example

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `it is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies > 3) {
      return 'You are expelled from school';
    }
    return `${this.firstName} ${this.lastName} was late ${this.tardies} time(s)`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return Math.ceil(sum / this.scores.length);
  }
}

let firstStudent = new Student('Jonathan', 'Butler', 9);
firstStudent.addScore(92);
firstStudent.addScore(87);
firstStudent.calculateAverage();

// CLASS METHODS have the STATIC keyword on the front which means you no longer call it on an individual instance, you call it on the class itself

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

Point.distance(p1, p2);

// ================================================
// SECTION 19 SINGLY LINKED LISTS
// ================================================

// linked lists are good at insertion and deletion, good reasons to use linked list especially if the dataset is large and you don't need random access
// random access not possible

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var first = new Node('Hi');
first.next = new Node('there');
first.next.next = new Node('how');
first.next.next.next = new Node('are');
first.next.next.next.next = new Node('you');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // push is inserting at the end
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    // removes list tail. complicated because it has to find the item before the end of the list
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      // edge case for if there are no items in the list
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    // removes list head
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    // add node to beginning of list
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(idx, val) {
    // change value of node based on pos in list
    let got = this.get(idx);
    if (got) {
      got.val = val;
      return true;
    }
    return false;
  }
  insert(idx, val) {
    // add a node to list at specific pos.
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val); // the !! coerces the value to a boolean
    if (idx === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(idx - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length += 1;
    return true;
  }
  remove(idx) {
    //remove a node from list at specific post.
    if (idx >= this.length || idx < 0) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
  }
  swapPairs() {
    let prev = this.head;
    let currentNode = this.head;
    let nextNode = this.head.next;
    this.head = this.head.next;

    while (nextNode) {
      const nextNext = nextNode.next;
      currentNode.next = nextNext;
      nextNode.next = currentNode;
      prev.next = nextNode;

      prev = currentNode;
      currentNode = nextNext;
      nextNode = nextNext?.next;
    }
  }
}

var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(5);
list.push(6);
list.insert(0, 44);
list.print();
list.reverse();
list.print();

// ================================================
// SECTION 18 HASH TABLES
// ================================================

// like arrays in that they are key value pairs, but the keys are not ordered

// a hash table is fast for adding/finding/removing values;

// a hash function takes data of an arbitrary size and fits it into data of a fixed size

// what makes a good hash function?

// 1. fast (aka constant time)
// 2. doesn't cluster outputs, but distributes uniformly
//    you may have collisions, and that's ok, but you want it to be spread out evenly
// 3. Deterministic: same input yields same output

// 'pink'.charCodeAt(1) - 96 -> gives you alphabet ranking

function hash(str, arrayLen) {
  let total = 0;
  for (i = 0; i < str.length; i++) {
    let value = str.charCodeAt(i) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

hash('cyan', 10);

// the above hash function takes a string of any length and returns a number between 1 and 10

// problems with the above function:
// 1. Only hashes strings(we won't worry about this)
// 2. Not contsant time - linear in key length
// 3. Could be more random

// why use prime numbers in hash functions? it's complicated, but basically you get fewer collisions when the length of the hash table is prime.

function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

// Separate chaining: at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list). more than one thing at each in a nested structure.

// Linear probing: only store one piece of data at each position. when we find a collision, search ahead through the array and find the next empty slot. prevents you from storing multiple things in one index in a nested structure;

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return 'nope';
  }
  keys() {
    // loops through the hash table array and returns array of keys in table
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  values() {
    // loops through hash table array and returns array of values in table
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable();
ht.set('cyan', 'baseba');
ht.set('ok', 'baske');
ht.set('what', 'footba');
ht.set('now', 'golf');
ht.set('hi', 'bye');
ht.set('french', 'fries');
ht.set('freh', 'fr');
ht.keyMap;
ht.get('freh');
ht.get('what');

ht.keys().forEach((key) => {
  console.log(ht.get(key));
});

// SET / GET

// SET
// 1. accepts a key and value
// 2. hashes the key
// 3. stores the key-value pair in hash table array via separate chaining (in a nested structure even if there is nothing there)

// GET
// 1. accepts key
// 2. hashes the key
// 3. Retrives the key-value pair
// 4. If the key isn't found, returns undefined

// ================================================
// SECTION 22 BST
// ================================================

// Inserting a node pseudo code

// - create a new node
// - starting at the root
// - - check if there is a root. if not - the root now becomes the new node
// - - if there is a root, check if the value of the new node is < or > val of root
// - - if it is greater
// - - - check to see if there is a node to the right
// - - - - if there is, move to that node and repeat steps
// - - - - if not, add that node as the right property
// - - if it is less
// - - - check to see if there is a node to the left
// - - - if there is, move to that node and repeat steps
// - - - if not, add that node as the left property
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  search() {}
}

var tree = new BST(10);
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.insert(10);
tree.root;

// graph intro

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      console.log(adjacentVertex);
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Dallas');
g.addVertex('Aspen');
g.addVertex('HongKong');
g.addVertex('LosAngeles');
g.addEdge('Tokyo', 'Dallas');
g.addEdge('Tokyo', 'HongKong');
g.addEdge('Dallas', 'Aspen');
g.addEdge('Dallas', 'HongKong');
g.addEdge('Dallas', 'LosAngeles');
g.addEdge('HongKong', 'LosAngeles');
g.adjacencyList;
