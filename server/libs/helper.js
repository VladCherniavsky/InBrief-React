/**
 * Created by Vlad on 4/30/2017.
 */

/**
 * Extension method for mongoose model
 * @function findAndCount
 * @param {Object} filter - Object which will be used as selector
 * @param {Object} skipLimit - Specify take and skip parameter
 * @param {Object} sort - Specify sorting
 * @return {Object} data - Contains 'count'  and 'data' properties
 */
export async function findAndCount(filter = {}, skipLimit = null, sort = null) {
    const [count, data] = await Promise.all([
        this.count(filter),
        this.find(filter, null, skipLimit).sort(sort)
    ]);
    return {
        count,
        data
    };
}
