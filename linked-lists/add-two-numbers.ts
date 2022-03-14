class ListNode {
  val: number;
  next = null;
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  constructor(sequence = []) {
    this.head = null;
    this.tail = null;
    for (let val of sequence) {
      this.append(val);
    }
  }

  append(value) {
    const node = new ListNode(value);
    // check if list is empty
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return this;
  }

  *traverse() {
    let traveller = this.head;
    while (traveller) {
      yield traveller;
      traveller = traveller.next;
    }
  }
}

const addTwoNumbers = (l1, l2) => {
  let head, tail;
  let carry = 0;

  while (l1 || l2) {
    // console.log(l1.val, l2.val, carry)
    const sum = (l1.val ?? 0) + (l2.val ?? 0) + carry;
    carry = sum > 9 ? 1 : 0;
    const node = new ListNode(sum % 10);

    if (!head) {
      // if list is empty
      head = tail = node;
    } else {
      tail.next = node;
      tail = node;
    }

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (carry) {
    const node = new ListNode(carry);
    tail.next = node;
    tail = node;
  }

  return head;
};

const l1 = new LinkedList([9, 9, 9, 8]);
const l2 = new LinkedList([5, 6, 4]);

let result = addTwoNumbers(l1.head, l2.head);

while (result) {
  console.log(result);
  result = result.next;
}
