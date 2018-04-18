import {takeEvery} from 'redux-saga/effects';
import {AUTH_REQUEST} from 'Actions/authActions';

// import {
//     PREVIOUS_SESSION_AUTH_REQUEST,
//     AUTH_REQUEST, LOGOUT, AUTH_REQUEST_SUCCESS,
//     LOGOUT_SUCCESS,
//     PREVIOUS_SESSION_AUTH_REQUEST_SUCCESS
// } from 'Actions/authActions';
//
import {auth} from 'Sagas/authSaga';
// import {previousSessionAuth, auth, logout, logoutSuccess} from 'Sagas/authSaga';
// import {saveStore, updateStore} from 'Sagas/initStoreSaga';

export default function* root() {
    // yield takeEvery(PREVIOUS_SESSION_AUTH_REQUEST, previousSessionAuth);
    yield takeEvery(AUTH_REQUEST, auth);
    // yield takeEvery(LOGOUT, logout);
    // yield takeEvery(AUTH_REQUEST_SUCCESS, saveStore);
    // yield takeEvery(LOGOUT_SUCCESS, logoutSuccess);
    // yield takeEvery(PREVIOUS_SESSION_AUTH_REQUEST_SUCCESS, updateStore);
}
