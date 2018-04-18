export const ADD_NEW_USER = 'ADD_NEW_USER';

export function addNewUser(userData) {
    return {
        type: ADD_NEW_USER,
        userData,
    }
}