var containsDuplicate = function(nums) {
    var ans = false;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                ans = true;
                break; // If a duplicate is found, no need to check further
            }
        }
        if (ans) {
            break; // If a duplicate is found, no need to check further
        }
    }
    return ans;
};

console.log(containsDuplicate([1, 4, 2, 3, 4])); // Output: true
