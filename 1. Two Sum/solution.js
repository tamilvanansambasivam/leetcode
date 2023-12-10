/**
 * Finds and returns the indices of two numbers in an array whose sum is equal to the target.
 *
 * @param {number[]} nums - The array of numbers.
 * @param {number} target - The target sum.
 * @returns {number[]} - An array containing the indices of the two numbers.
 */
var twoSum = function(nums, target) {
    // Create a hash map to store the difference between the target and each number along with its index.
    const mp = {};

    // Iterate through the array of numbers.
    for (let i = 0; i < nums.length; i++) {
        // Calculate the difference between the target and the current number.
        const diff = target - nums[i];

        // Check if the difference is already in the hash map.
        // If yes, return the indices of the two numbers that add up to the target.
        if (diff in mp) {
            return [mp[diff], i];
        }

        // If the difference is not in the hash map, store the current number and its index in the map.
        mp[nums[i]] = i;
    }
};


// time complexity  : O(n)
// space complexity : O(n)
