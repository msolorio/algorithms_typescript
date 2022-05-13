/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.


Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

///////////////////////////////////////////////////////////////////////////////////////
// Solution with O(n^2) time complexity - we can do better ////////////////////////////
// function sumToTarget(
//   num1: number,
//   num2: number,
//   target: number
// ): boolean {
//   return num1 + num2 === target
// }

// function twoSum(nums: number[], target: number): number[] {
//   const numsLen = nums.length;

//   for (let i = 0; i < numsLen; i++) {
//     const iNum = nums[i]

//     for (let j = 0; j < numsLen; j++) {
//       const jNum = nums[j]

//       if (j !== i && sumToTarget(iNum, jNum, target)) {
//         return [i, j]
//       }
//     }
//   }

//   return []
// }

///////////////////////////////////////////////////////////////////////////////////////
// Solution inspired by LeetCode solutions - awesome!
function twoSum(nums: number[], target: number): number[] {
  const numsLen = nums.length;

  const map = new Map()

  for (let i = 0; i < numsLen; i++) {
    const possible = target - nums[i]
    
    if (map.has(possible)) {
      return [map.get(possible), i]
    }

    map.set(nums[i], i)
  }

  return []
}

///////////////////////////////////////////////////////////////////////////////////////

// const result = twoSum([1, 2, 3, 4, 5], 55)
// console.log('result ==>', result)
