var shuffle = function(nums, n) {
    ans=[];
    for (let i = 0; i < nums.length/2; i++) {
        ans.push(nums[i],nums[i+n]);
    }
    return ans;
};