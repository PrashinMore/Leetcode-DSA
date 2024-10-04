var addTwoNumbers = function (l1, l2) {
  const num1 = "",
    num2 = "";
  for (let i = 0; i < l1.length; i++) {
    num1 += i;
  }
  for (let j = 0; j < l2.length; j++) {
    num2 += j;
  }
  const sum = Number(num1) + Number(num2);
  const resultArray = [];
  for (let k = sum.length - 1; k >= 0; k--) {
    resultArray.push(sum[k]);
  }
  return resultArray;
};
