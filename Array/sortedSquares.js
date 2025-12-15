/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  const result = Array(nums.length).fill(0);

  let i = 0;
  let j = nums.length - 1;
  let k = j;

  while (j >= i) {
    const val1 = Math.abs(nums[i]);
    const val2 = Math.abs(nums[j]);

    if (val1 > val2) {
      result[k] = val1 * val1;
      i++;
      k--;
    } else {
      result[k] = val2 * val2;
      j--;
      k--;
    }
  }

  return result;
};
