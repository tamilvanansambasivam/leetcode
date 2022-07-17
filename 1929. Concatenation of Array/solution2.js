var getConcatenation = function (nums) {

    static = nums.length;
    for (j = 0; j < static; j++) {
        nums.push(nums[j]);
    }
    return nums;
};