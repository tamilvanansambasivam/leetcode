/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    const mp = {};

   for (let i = 0; i < nums.length; i++) {
   	const diff = target - nums[i];
   
   	if (diff in mp) return [mp[diff],i];

   	mp[nums[i]] = i;
   }

};

// time complexity  : O(n)
// space complexity : O(n)