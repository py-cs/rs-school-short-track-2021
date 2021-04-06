/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let num = 1;
  let res = '';
  let i = 0;
  while (i < str.length) {
    while (str[i] === str[i + 1]) {
      num++;
      i++;
    }
    res += num > 1 ? `${num}${str[i]}` : str[i];
    i++;
    num = 1;
  }
  return res;
}

module.exports = encodeLine;
