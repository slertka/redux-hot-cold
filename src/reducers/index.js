import * as actions from "../actions";

const initialState = {
  guesses: [1, 52, 34, 98],
  feedback: "test feedback",
  auralStatus: "test auralStatus",
  correctAnswer: 23
};

export const HotColdReducer = (state = initialState, action) => {
  if (action.type === actions.MAKE_GUESS) {
  } else if (action.type === actions.RESTART_GAME) {
  } else {
    return state;
  }
};
