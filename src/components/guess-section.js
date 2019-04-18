import React from "react";
import { connect } from "react-redux";
import { makeGuess } from "../actions";

import Feedback from "./feedback";
import GuessForm from "./guess-form";

export function GuessSection(props) {
  // const { feedback, guessCount } = props;
  const guessCount = props.guesses.length;
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback feedback={props.feedback} guessCount={guessCount} />
      <GuessForm onMakeGuess={guess => props.dispatch(makeGuess(guess))} />
    </section>
  );
}

const mapStateToProps = state => ({
  feedback: state.feedback,
  guesses: state.guesses,
  guessCount: state.guessCount
});

export default connect(mapStateToProps)(GuessSection);
