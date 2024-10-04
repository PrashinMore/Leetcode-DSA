//Brute force solution

// var isPalindrome = function (x) {
//   if (x < 0) return false;
//   x = x.toString();
//   let str = "";
//   for (i = x.length - 1; i >= 0; i--) {
//     str += x[i];
//   }
//   if (x === str) {
//     return true;
//   }
//   return false;
// };

// solution using two pointers
var isPalindrome = function (x) {
  if (x < 0) return false;
  x = x.toString();
  let i = 0;
  let j = x.length - 1;
  const halfIndex = Math.floor(x.length / 2);
  if (x.length % 2 !== 0) {
    while (i < halfIndex && j > halfIndex) {
      if (x[i] !== x[j]) {
        return false;
      }
      i++;
      j--;
    }
  } else {
    while (i < halfIndex && j >= halfIndex) {
      if (x[i] !== x[j]) {
        return false;
      }
      i++;
      j--;
    }
  }
  return true;
};
