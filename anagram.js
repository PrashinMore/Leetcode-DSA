function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let countS = {},
    countT = {};

  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = (countS[s[i]] || 0) + 1;
    countT[t[i]] = (countT[t[i]] || 0) + 1;
  }

  for (let c in countS) {
    if (countS[c] !== countT[c]) {
      return false;
    }
  }

  return true;
}

const s = "anagram";
const t = "managrs";
console.log(isAnagram(s, t)); // Should print true
