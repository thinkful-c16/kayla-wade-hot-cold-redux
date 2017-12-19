import React from 'react';

import './guess-count.css';
//accesses guess count via length of guesses array

export default function GuessCount(props) {
    const isPlural = props.guessCount !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';

    return (
        <h2 id="guessCount">
            You've made <span id="count">{props.guessCount}</span> {guessNoun}!
        </h2>
    );
}
