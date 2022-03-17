/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * https://leetcode.com/problems/rotate-list/
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const getByIndex = (head, length, k) => {
  const indexToGet = length - k;
  let counter = 0;
  let current = head;
  while (counter !== indexToGet) {
    current = current.next;
    counter++;
  }
  return current;
};

const getUpToIndex = (head, length, k) => {
  let current = head;
  let counter = 0;
  while (counter < length) {
    if (counter === k) {
      current.next = null;
    }
    current = current?.next;
    counter++;
  }
  return head;
};

const getLength = (head) => {
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }
  return length;
};

const join = (newHead, rest) => {
  let current = newHead;
  while (current) {
    if (current.next === null) {
      current.next = rest;
      return newHead;
    }
    current = current.next;
  }
};
var rotateRight = function (head, k) {
  const length = getLength(head);
  let newHead = getByIndex(head, length, k);
  let rest = getUpToIndex(head, length, k);
  return join(newHead, rest);

};
// [1,2,3,4,5]
// [5,1,2,3,4]
// [4,5,1,2,3]
