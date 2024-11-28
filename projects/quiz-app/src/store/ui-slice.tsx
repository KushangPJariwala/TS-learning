import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    quizOn: false,
    QuizPreferencesIsSet: false,
    viewResults: false,
    viewAns:false
  },
  reducers: {
    toggle(state, action) {
      const btnType = action.payload.btnType;
      if (btnType === "toggleSetPreferences")
        state.QuizPreferencesIsSet = !state.QuizPreferencesIsSet;

      if (btnType === "toggleQuizOn") state.quizOn = !state.quizOn;
      if (btnType === "toggleViewResults")
        state.viewResults = !state.viewResults;
      if (btnType === "toggleViewAns")
        state.viewAns = !state.viewAns;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
