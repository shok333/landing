export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const LOGOUT = 'LOGOUT';

export function authRequestAction (authType) {
    return {
        type: AUTH_REQUEST,
        authType
    }
}

export function authRequestSuccessAction (userProfileData) {
    return {
        type: AUTH_REQUEST_SUCCESS,
        userProfileData
    }
}

export function logoutAction () {
    return {
        type: LOGOUT,
    }
}

