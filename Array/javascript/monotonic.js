/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = function (nums) {
  if (nums.length < 2) return true;

  let isMonotonicIncreasing = true;
  let isMonotonicDecreasing = true;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) isMonotonicDecreasing = false;
    if (nums[i] < nums[i - 1]) isMonotonicIncreasing = false;

    if (!(isMonotonicIncreasing || isMonotonicDecreasing)) break;
  }

  return isMonotonicIncreasing || isMonotonicDecreasing;
};
