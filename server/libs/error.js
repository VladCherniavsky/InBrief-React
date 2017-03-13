/**
 * Created by User on 3/13/2017.
 */
export function createError(message, status) {
    const error = new Error();
    error.message = message || '';
    status ? error.status = status : null;
    return error;
}
