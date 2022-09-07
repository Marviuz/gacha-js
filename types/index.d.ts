export = GachaJS;
declare class GachaJS {
    /**
     * Initialize the contents of the gacha
     *
     * @param {Object} rates Rates of the gacha contents
     * @param {Object} data Data to do gacha
     */
    constructor(rates: object, data: object);
    _data: {
        collection: Array<object>,
        findKey: string
    };
    _rates: object;
    /**
     * Pull the gacha from collection
     *
     * @param {Number} numberOfPulls number of pulls
     * @returns Collection of pulls
     */
    getPullByCollection(numberOfPulls?: number): object | Array<object>;
    /**
     * Set the rate of gacha
     *
     * @param {Object} rates Rates of gacha contents
     */
    setRates(rates: object): void;
    /**
     * Returns the rate of gacha
     *
     * @returns Rates of gacha
     */
    getRates(): object;
    /**
     * Pull the gacha
     *
     * @param {Number} numberOfPulls How many number of pulls
     * @returns an array of pulls or a single pull depending on parameter
     */
    getPullByRarity(numberOfPulls?: number): Array<string>;
}
