module.exports = function check(str, bracketsConfig) {
  // your solution
  let brackets = str;
  let count = str.length;
  for (let i = 0; i < bracketsConfig.length; i++) {
    brackets = brackets.split(bracketsConfig[i][0] + bracketsConfig[i][1]).join('');
    if (brackets.length < count) {
      count = brackets.length;
      i = -1;
    }
  }
  return brackets.length === 0 ? true : false;
}
