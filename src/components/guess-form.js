import React from 'react';

import './guess-form.css';
import { connect } from 'react-redux';
import store from '../store';
import { makeGuess } from '../actions';

//access to guesses

export class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    // if (this.props.onMakeGuess) {
    //   const value = this.input.value;
    //   this.props.onMakeGuess(value);
    // }
    store.dispatch(makeGuess(parseInt(this.input.value, 10)));
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          ref={input => (this.input = input)}
          required
        />
        <button 
          type="submit"
          name="submit"
          id="guessButton" 
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}

export default connect()(GuessForm)