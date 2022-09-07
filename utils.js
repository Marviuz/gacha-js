/**
 * Get a random number.
 * 
 * @param {Number} min Minimum number
 * @param {Number} max Maximum Number
 * @returns Generated number
 */
const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

/**
 * Sort rates by their percentage
 * 
 * @param {Object} arr object of rates
 * @returns Sorted objects by values
 */
const sortByValuesOfObject = arr => {
  const $ = {};

  Object
    .entries(arr)
    .sort(([, aValue], [, bValue]) => {
      if (aValue > bValue) return 1;
      if (bValue > aValue) return -1;
      else return 0;
    })
    .forEach(([key, value]) => $[key] = value);

  return $;
};

/**
 * Checks if the rate of the Gacha is equal to 100%
 * 
 * @param {Object} rates Gacha rates
 * @returns boolean
 */
const checkRates = (rates) => {
  let totalRates = 0;

  for (const [, value] of Object.entries(rates)) {
    totalRates += value;
  }

  return totalRates === 100;
};

/**
 * Round the number to whole number
 * 
 * @param {Number} number number to round
 * @returns Returns rounded whole number
 */
const round = (number) => Number(number.toFixed());

exports.getRandomNumber = getRandomNumber;
exports.sortByValuesOfObject = sortByValuesOfObject;
exports.checkRates = checkRates;
exports.round = round;