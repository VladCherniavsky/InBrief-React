/**
 * Created by Vlad on 4/30/2017.
 */

/**
 * Extension method for mongoose model
 * @function findAndCount
 * @param {Object} filter - Object which will be used as selector
 * @param {Object} skipLimit - Specify take and skip parameter
 * @param {Object} sort - Specify sorting
 * @param {String} populate - Specify wich field need to populate
 * @return {Object} data - Contains 'count'  and 'data' properties
 */
export async function findAndCount(
    filter = {},
    skipLimit = null,
    sort = null,
    populate = null
) {
    if(Object.keys(filter).length > 0) {
        for(let key in Object.keys(filter)) {
            if(filter[key].length > 0) {
                filter[key] = {'$in': filter[key]};
            }
        }
    }
    const [count, data] = await Promise.all([
        this.count(filter),
        this.find(filter, null, skipLimit).sort(sort).populate(populate).exec()
    ]);
    return {
        count,
        data
    };
}
