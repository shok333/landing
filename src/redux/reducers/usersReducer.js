import {ADD_NEW_USER} from 'Actions/usersActions';
import {getIndexUsingId} from 'Root/tools';

function initialState() {
    return [];
}

export default function usersReducer(state = initialState(), action) {
    switch (action.type) {
        case ADD_NEW_USER:
            const idOfSavedUser = getIndexUsingId(state, action.userData.userId);

            if (idOfSavedUser !== -1) {
                state[idOfSavedUser] = {
                    ...action.userData
                };

                return [...state];
            }

            return [
                ...state,
                action.userData,
            ]

        default:
            return state;
    }
}