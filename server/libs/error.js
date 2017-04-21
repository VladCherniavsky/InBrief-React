/**
 * Created by User on 3/13/2017.
 */


/**
 * Create error
 * @function createError
 * @param {String} message - Message for the error
 * @param {Number} status - Message for the error
 * @return {Object} error
 */
export function createError(message, status) {
    const error = new Error();
    error.message = message || '';
    status ? error.status = status : null;
    return error;
}
