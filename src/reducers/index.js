import {RESTART_GAME} from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1
}

export const gameRestartReducer = (state=initialState, action) => {
    if(action.type === RESTART_GAME) {
        return Object.assign({}, state, {
            guesses: action.guesses,
            feedback: action.feedback,
            auralStatus: action.auralStatus,
            correctAnswer: action.correctAnswer
        })
    }
    return(state);
}