export const RESTART_GAME = 'RESTART_GAME';

export const restartGame = () => ({
    type: RESTART_GAME,
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1
})

export const MAKE_GUESS = 'MAKE_GUESS'

export const makeGuess = (guess) => ({
    type: MAKE_GUESS,
    guess: guess
})

export const SET_AURALSTATUS = 'SET_AURALSTATUS'

export const setAuralStatus = () => ({
    type: SET_AURALSTATUS
})

// export const GENERATE_FEEDBACK = 'GENERATE_FEEDBACK'

// export const generateFeedback = (guess) => ({
//     type: GENERATE_FEEDBACK,
//     guess: guess
// })