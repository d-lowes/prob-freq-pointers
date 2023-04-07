"use strict";

// add whatever parameters you deem necessary & write docstring
/*

input: a sorted array and a single number
output: boolean

constraints:
  array must have a length of at least 2
  cannot use a nested loops with indeterminant lengths

psuedo-code:
  add two numbers in the array and divide the sum by 2 to get the average
  if the average is equal to the target number, then the function evaluates to true
  assign multiple pointers to the sorted array
  iterate through the array between the two pointers
  if the avg is less than the target, increment the left side
    otherwise, decrement the right side

*/

/** accept an array of nums and a target average and find if a pair's average is
 * equal to the target average ; return either true or false
 */
function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let avg = (nums[left] + nums[right]) / 2;

    if (avg === targetAvg){
      return true;
    } else if (avg < targetAvg) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}



averagePair([1, 2, 3], 2.5);         // true
averagePair([3, 3, 6, 12, 19], 8);   // false
averagePair([1, 2, 3], 2);           // true
averagePair([], 4);                  // false