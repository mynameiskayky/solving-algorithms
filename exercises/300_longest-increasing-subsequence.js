// leetcode exercise: https://leetcode.com/problems/longest-increasing-subsequence/description/?envType=daily-question&envId=2024-01-05

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  const tails = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    let left = 0;
    let right = tails.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < nums[i]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left === tails.length) {
      tails.push(nums[i]);
    } else {
      tails[left] = nums[i];
    }
  }

  return tails.length;
};

const result = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
console.log(result); // expected output: 4
