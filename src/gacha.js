const { getRandomNumber, sortByValuesOfObject, checkRates, round } = require('./utils');

class GachaJS {
  _data;
  _rates;

  /**
   * Initialize the contents of the gacha
   * 
   * @param {Object} rates Rates of the gacha contents
   * @param {Object} data Data to do gacha
   */
  constructor(rates, data) {
    this._data = data;
    if (rates) {
      if (checkRates(rates)) this._rates = sortByValuesOfObject(rates);
      else throw new Error('Total rates is not equal to 100%');
    }
  }

  /**
   * Pull the gacha from collection
   * 
   * @param {Number} numberOfPulls number of pulls
   * @returns Collection of pulls
   */
  getPullByCollection(numberOfPulls = 1) {
    let rarityPulls = this.getPullByRarity(numberOfPulls);
    rarityPulls = typeof rarityPulls === 'string' ? [rarityPulls] : rarityPulls;
    const { collection, findKey } = this._data;

    const pulls = rarityPulls.map(rarityOfPull => { // Iterate through caught rarities.
      const rarityCollection = collection.filter($ => { // Filter through collection.
        let finalKey = $;
        findKey.split('.').forEach(key => { // Set rarity key location
          finalKey = finalKey[key];
        });

        return finalKey === rarityOfPull;
      });

      const index = round(Math.random() * (rarityCollection.length - 1));
      return rarityCollection[index];
    });

    return pulls.length > 1 ? pulls : pulls[0];
  }

  /**
   * Set the rate of gacha
   * 
   * @param {Object} rates Rates of gacha contents
   */
  setRates(rates) {
    if (checkRates(rates)) this._rates = sortByValuesOfObject(rates);
  }

  /**
   * Returns the rate of gacha
   * 
   * @returns Rates of gacha
   */
  getRates() {
    return this._rates;
  }

  /**
   * Pull the gacha
   * 
   * @param {Number} numberOfPulls How many number of pulls
   * @returns an array of pulls or a single pull depending on parameter
   */
  getPullByRarity(numberOfPulls = 1) {
    const pulls = [];

    for (let i = 0; i < numberOfPulls; i++) {
      const rand = getRandomNumber(0, 100);
      let gachaValue = 0;

      for (const [key, value] of Object.entries(this._rates)) {
        gachaValue += value;

        if (rand <= gachaValue) {
          pulls.push(key);
          break;
        }
      }
    }

    return pulls.length > 1 ? pulls : pulls[0];
  }
}

module.exports = GachaJS;