export const RESTART_GAME = 'RESTART_GAME';

export const restartGame = () => ({
    type: RESTART_GAME,
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1
})