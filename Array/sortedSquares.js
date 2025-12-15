/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  const squaredArray = nums.map((num) => num * num);

  // You can use any popular sorting algorithm i.e. Merge sort, Quick sort, etc
  return squaredArray.sort((a, b) => a - b);
};
