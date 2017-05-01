/**
 * Created by Vlad on 4/30/2017.
 */

/**
 * Extension method for mongoose model
 * @function findAndCount
 * @param {Object} filter - Object which will be used as selector
 * @param {Object} skipLimit - Specify take and skip parameter
 * @param {Object} sort - Specify sorting
 * @param {String} name - Optional: set property name in returned object(default: 'data')
 * @return {Object} data - Contains 'count'  and 'data' properties
 */
export async function findAndCount(filter, skipLimit, sort, name) {
    const select = filter ? filter : {};
    const skipAndLimit = skipLimit ? skipLimit : null;
    const sortProps = sort ? sort : null;
    try {
        const data = await Promise.all([
            this.count(filter),
            this.find(select, null, skipAndLimit).sort(sortProps)
        ]);
        return {
            count: data[0],
            [name ? name : 'data']: data[1]
        };
    } catch(err) {
        throw err;
    }
}
