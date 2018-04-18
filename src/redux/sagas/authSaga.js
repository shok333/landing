import {call, put} from 'redux-saga/effects';
import {getAuthStatus, getAuthPopUp, getDataOfUser} from 'Api/vkAuthApi.js';
import {authRequestSuccessAction} from 'Actions/authActions';
import {addNewUser} from 'Actions/usersActions';

export function* auth() {
    let loginStatus = yield call(getAuthStatus);

    if (loginStatus.status === 'unknown') {
        yield call(getAuthPopUp);
    }

    const
        dataOfUser = yield call(getDataOfUser),
        {domain: userId, first_name: firstName, last_name: lastName, photo_50: avatar} = dataOfUser;

    yield put(authRequestSuccessAction({
        userId,
        firstName,
        lastName
    }));

    yield put(addNewUser({
        userId,
        firstName,
        lastName,
        avatar,
    }));
}