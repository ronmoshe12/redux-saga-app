import * as type from '../types';
// actions uses the reducer's function.

export function getUsers(users) {
    return {
        type: type.GET_USERS_REQUESTED,
    }
}