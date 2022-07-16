var getConcatenation = function (nums) {
  var ans = [];
  var i = 0;
  while (i < 2) {
    i++;
    for (j = 0; j < nums.length; j++) {
      ans.push(nums[j]);
    }
  }
  return ans;
};
