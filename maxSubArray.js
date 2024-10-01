function maxSubArray(nums) {
  maxSub = nums[0];
  currSum = 0;

  for (i = 0; i < nums.length; i++) {
    if (currSum < 0) {
      currSum = 0;
    }
    currSum += nums[i];
    maxSub = Math.max(maxSub, currSum);
  }
  console.log(maxSub);
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
