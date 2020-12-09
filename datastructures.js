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

let firstStudent = new Student('Jonathan', 'Butler', 9);

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

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
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
    console.log('here it is', arr);
  }
}

var list = new SinglyLinkedList();
list.push('hi');
list.push('bye');
