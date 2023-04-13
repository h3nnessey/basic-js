const { NotImplementedError } = require('../extensions/index.js');

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
  const domainsArray = domains.map(item =>
    item
      .split('.')
      .map(item => `.${item}`)
      .reverse()
  );

  return domainsArray.reduce((acc, curr) => {
    const [firstLvl, secondLvl, thirdLvl] = curr;
    const firstAndSecondLvl = firstLvl + secondLvl;
    const fullDomain = firstLvl + secondLvl + thirdLvl;

    acc[firstLvl] ? (acc[firstLvl] += 1) : (acc[firstLvl] = 1);

    if (secondLvl && !thirdLvl) {
      acc[firstAndSecondLvl] ? (acc[firstAndSecondLvl] += 1) : (acc[firstAndSecondLvl] = 1);
    }

    if (thirdLvl) {
      acc[firstAndSecondLvl] ? (acc[firstAndSecondLvl] += 1) : (acc[firstAndSecondLvl] = 1);
      acc[fullDomain] ? (acc[fullDomain] += 1) : (acc[fullDomain] = 1);
    }

    return acc;
  }, {});
}

module.exports = {
  getDNSStats,
};
