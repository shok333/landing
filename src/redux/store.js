import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from 'Reducers/indexReducer';
import indexSaga from 'Sagas/indexSaga';

const sagaMiddleware = createSagaMiddleware();

const saveStore = (state) => {
    try {
        localStorage.setItem('currentAppStore', JSON.stringify(state));
    }
    catch (err) {
        return undefined;
    }
}

const loadState = () => {
    try {
        const store = localStorage.getItem('currentAppStore');

        if (store === null) {
            // return undefined;
            return {//Просто данные для инциализации (для удобства).
                auth: {
                    userHasAuthenticated: false,
                    userId: null,
                    firstName: '',
                    lastName: '',
                },
                answers: {
                    lastAnswerId: 3,
                    listOfAnswers: [
                        {
                            authorId: "durov",
                            decisionCome: "я точно приду",
                            id: 1,
                            withMe: 3,
                        },
                        {
                            authorId: "dm",
                            decisionCome: "я точно не приду",
                            id: 2,
                            withMe: 0,
                        },
                    ]
                },
                users: [
                    {
                        userId: 'dm',
                        firstName: 'Дмитрий',
                        lastName: 'Медведев',
                        avatar: 'https://pp.userapi.com/c836634/v836634705/19407/MvdMwQP6N0k.jpg',
                    },
                    {
                        userId: 'durov',
                        firstName: 'Павел',
                        lastName: 'Дуров',
                        avatar: 'https://pp.userapi.com/c836333/v836333001/31193/dNxZpRF-z_M.jpg',
                    }
                ]
            }
        }

        return JSON.parse(store);
    }
    catch (err) {
        return undefined;
    }
}

const store = createStore(
    reducers,
    loadState(),
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware
        )
    )
);

store.subscribe(() => {
    saveStore(store.getState());
});

sagaMiddleware.run(indexSaga);

export default store;

