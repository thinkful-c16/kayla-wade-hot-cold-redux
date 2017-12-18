import {RESTART_GAME, MAKE_GUESS, SET_AURALSTATUS} from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1
}

export const gameReducer = (state=initialState, action) => {
    if(action.type === RESTART_GAME) {
        return Object.assign({}, state, {
            guesses: action.guesses,
            feedback: action.feedback,
            auralStatus: action.auralStatus,
            correctAnswer: action.correctAnswer
        })
    }
    else if(action.type === MAKE_GUESS) {

        const difference = Math.abs(action.guess - state.correctAnswer);

        let feedback;

        if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
        } else if (difference >= 30) {
        feedback = 'You\'re Cold...';
        } else if (difference >= 10) {
        feedback = 'You\'re Warm.';
        } else if (difference >= 1) {
        feedback = 'You\'re Hot!';
        } else {
        feedback = 'You got it!';
        }
            
        return Object.assign({}, state, {
            guesses: [...state.guesses, action.guess],
            feedback: feedback
        })
    }
    else if (action.type === SET_AURALSTATUS) {
        const pluralize = state.guesses.length !== 1;

        let  auralStatus = `Here's the status of the game right now: ${state.feedback} You've made ${state.guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

        if (state.guesses.length > 0) {
            auralStatus+= ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${state.guesses.reverse().join(', ')}`;
        }

        return Object.assign({}, state, {
            auralStatus: auralStatus
        })
    }
    return(state);
}