/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let stats = [];
  const parseDomain = (domain) => {
    const res = [];
    const parts = domain.split('.').reverse();
    for (let i = 0; i < parts.length; i++) {
      res.push(`.${parts.slice(0, i + 1).join('.')}`);
    }
    return res;
  };
  stats = domains.map((d) => parseDomain(d)).flat();
  return stats.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
}

module.exports = getDNSStats;
