export const SAVE_MY_ANSWER = 'SAVE_MY_ANSWER';
export const REMOVE_MY_ANSWER = 'REMOVE_MY_ANSWER';

export function saveMyAnswerAction(answerData) {
    return {
        type: SAVE_MY_ANSWER,
        answerData,
    }
}

export function removeMyAnswerAction(authorId) {
    return {
        type: REMOVE_MY_ANSWER,
        authorId,
    }
}