import {SAVE_MY_ANSWER, REMOVE_MY_ANSWER} from 'Actions/answersActions';
import {getIndexUsingId} from 'Root/tools';

function initialState() {
    return {
        lastAnswerId: 0,
        listOfAnswers: [],
    };
}

export default function answersReducer(state = initialState(), action) {
    let lastAnswerOfUserIndex;

    switch (action.type) {
        case SAVE_MY_ANSWER:
            lastAnswerOfUserIndex = getIndexUsingId(state.listOfAnswers, action.answerData.authorId);

            if (lastAnswerOfUserIndex !== -1) {
                state.listOfAnswers[lastAnswerOfUserIndex] = {
                    ...action.answerData
                };

                return {...state};
            }

            return {
                ...state,
                listOfAnswers: [
                    ...state.listOfAnswers,
                    {
                        id: state.lastAnswerId,
                        ...action.answerData,
                    }
                ],
                lastAnswerId: state.lastAnswerId + 1,
            }

        case REMOVE_MY_ANSWER:
            lastAnswerOfUserIndex = getIndexUsingId(state.listOfAnswers, action.authorId);

            if (lastAnswerOfUserIndex !== -1) {
                state.listOfAnswers.splice(lastAnswerOfUserIndex, 1);

                return {
                    ...state,
                    listOfAnswers: state.listOfAnswers,
                };
            }

            return state;

        default:
            return state;
    }
}