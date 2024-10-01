function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let findNum = target - nums[i];
    if (findNum in map) {
      return [map[findNum], i];
    } else {
      map[nums[i]] = i;
      console.log(map);
    }
  }
}

const array = [2, 1, 5, 3];
const target = 4;
console.log(twoSum(array, target));
