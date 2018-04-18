import {AUTH_REQUEST_SUCCESS, LOGOUT} from 'Actions/authActions';

function initialState() {
    return {
        userHasAuthenticated: false,
        userId: null,
        firstName: '',
        lastName: '',
    };
}

export default function authReducer(state = initialState(), action) {
    switch (action.type) {
        case AUTH_REQUEST_SUCCESS:
            return {
                ...state,
                userHasAuthenticated: true,
                ...action.userProfileData,
            };

        case LOGOUT:
            return initialState();

        default:
            return state;
    }
}
