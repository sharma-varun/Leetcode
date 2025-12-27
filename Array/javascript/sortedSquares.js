/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  const result = Array(nums.length).fill(0);

  let pointerLeft = 0;
  let pointerRight = nums.length - 1;
  let i = pointerRight;

  while (pointerRight >= pointerLeft) {
    const val1 = Math.abs(nums[pointerLeft]);
    const val2 = Math.abs(nums[pointerRight]);

    if (val1 > val2) {
      result[i] = val1 * val1;
      pointerLeft++;
    } else {
      result[i] = val2 * val2;
      pointerRight--;
    }
    i--;
  }

  return result;
};
