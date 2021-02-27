var isWord = require('is-word');
var englishWords = isWord('american-english');
// console.log(englishWords.check('direction')); // true

let board = [
    ['e', 'i', 'l', 'a'],
    ['t', 'p', 'a', 'g'],
    ['r', 'e', 't', 'o'],
    ['h', 't', 'a', 'y'],
  ],
  words = ['gap', 'pet', 'yatep', 'gal'];

function findWords(board, words) {
  if (words.length <= 0) return [];
  var result = [];
  recurse(board, words, 0, result);
  return result;
}

function recurse(board, words, index, result) {
  if (index < words.length) {
    var temp = duplicate(board);
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        // console.log(words[index].charAt(0))
        if (board[i][j] == words[index].charAt(0)) {
          var exists = helper(board, i, j, 0, words[index]);
          if (exists) {
            if (!result.includes(words[index])) {
              result.push(words[index]);
            }
          }
        }
      }
    }
    recurse(temp, words, index + 1, result);
  }
}

function duplicate(board) {
  var temp = [];
  for (let i = 0; i < board.length; i++) {
    var t = [];
    for (let j = 0; j < board[0].length; j++) {
      t.push(board[i][j]);
    }
    temp.push(t);
  }
  return temp;
}

function helper(board, i, j, index, word) {
  if (index >= word.length) return true;
  if (
    i < 0 ||
    j < 0 ||
    i >= board.length ||
    j >= board[0].length ||
    board[i][j] == 'X' ||
    word.charAt(index) != board[i][j]
  )
    return false;

  var temp = board[i][j];
  board[i][j] = 'X';

  if (
    helper(board, i + 1, j, index + 1, word) ||
    helper(board, i - 1, j, index + 1, word) ||
    helper(board, i, j - 1, index + 1, word) ||
    helper(board, i, j + 1, index + 1, word)
  ) {
    return true;
  }
  board[i][j] = temp;
  return false;
}

findWords(board, words);
