import * as actions from "../actions";

const initialState = {
  guesses: [1, 52, 34, 98, 53],
  feedback: "test feedback",
  auralStatus: "test auralStatus",
  correctAnswer: 23
};

export const HotColdReducer = (state = initialState, action) => {
  if (action.type === actions.RESTART_GAME) {
    return state;
  } else if (action.type === actions.MAKE_GUESS) {
    return state;
  } else if (action.type === actions.GENERATE_AURAL_UPDATE) {
    return state;
  } else {
    return state;
  }
};
