import {combineReducers} from 'redux';
import authReducer from 'Reducers/authReducer';
import answersReducer from 'Reducers/answersReducer';
import usersReducer from 'Reducers/usersReducer';

export default combineReducers({
    auth: authReducer,
    answers: answersReducer,
    users: usersReducer,
})