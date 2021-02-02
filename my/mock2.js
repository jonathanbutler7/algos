// Give more concrete answers

// Will give you bait but not yank teeth

// Give a specific example of problems I solved
// You mentioned pages you built. But what does that entail? Did you use boiler plate , build all from scratch. Take out guesswork on his end.

// Name a specific problem you had to overcome.

// Mention specific feature that changed the game for the client.

// Cool pages you built but what was your specific contribution.

// Transition to tech: good answers. Performing under pressures. But link to a specific example.

// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Notice that the solution set must not contain duplicate quadruplets.
// If no targets can be met, return empty array;

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

const nums = [1, 0, -1, 0, -2, 2],
  target = 0;

nums.sort((a, b) => a - b);

function fourSum(nums, target) {
  const quads = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    }
    if (arr[i] * 4 > target) return quads;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (arr[j] === arr[k]) {
        continue;
      }
      let k = i + 2,
        l = nums.length - 1;
      while (k < l) {
        if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
          quads.push([nums[i], nums[j], nums[k], nums[l]]);
          while (nums[k] === nums[k + 1]) k++;
          while (nums[l] === nums[l - 1]) l--;
          k++;
          l--;
        } else if (sum < target) {
          k++;
        } else {
          l--;
        }
      }
    }
  }
  return quads;
}

let nums = [1, 0, -1, 0, -2, 2],
  target = 0;
fourSum(nums, target); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 3; ++i) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (4 * nums[i] > target) break;
    let sum3 = target - nums[i];

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      if (3 * nums[j] > sum3) break;

      let third = j + 1;
      let fourth = nums.length - 1;

      while (third < fourth) {
        const sum = nums[i] + nums[j] + nums[third] + nums[fourth];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[third], nums[fourth]]);
          while (nums[third] === nums[third + 1]) third++;
          while (nums[fourth] === nums[fourth - 1]) fourth--;
          third++;
          fourth--;
        } else if (sum < target) third++;
        else fourth--;
      }
    }
  }
  return result;
};

// talk aloud even it it's wrong at first.
// mention an approach and say why it's not optimal.
// let the interviewer know you might be able to find a more optimal solution
// good i mentioned while loop, similar to two sum, bc i was trying to build off previous idea
// good to think about first iteration
// don't look defeated. even if you'e confused, articulate what you're trying
// don't try to write an optimal solution right off the bat.

// https://leetcode.com/problems/maximal-square/
// https://leetcode.com/problems/4sum/discuss/504963/javascript-76ms-36.8MB
// https://leetcode.com/problems/add-two-numbers-ii/
// https://leetcode.com/problems/candy-crush/

// STAS'S LISTS
// bloomberg: https://leetcode.com/list/xzqrtueg/
// favorite: https://leetcode.com/list/xgbjuji1/
// REACTO strategy: https://www.fullstackacademy.com/blog/whiteboard-coding-interviews-a-6-step-process-to-solve-any-problem
