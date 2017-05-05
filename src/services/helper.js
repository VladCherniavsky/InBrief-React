/**
 * Created by User on 5/5/2017.
 */

export const addHostToLink = (link) => {
    return location.origin
        + '/api/link/'
        + link;
};
