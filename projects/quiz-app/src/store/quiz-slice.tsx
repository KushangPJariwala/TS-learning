import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../assests/data";

type initialStateType = {
  score: number;
  category: string;
  difficulty: string;
  categorizedQuestions: {}[];
  givenAns: {}[];
  time: number;
};
const initialState: initialStateType = {
  score: 0,
  category: "",
  difficulty: "",
  categorizedQuestions: [],
  givenAns: [],
  time: 0,
};
const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setPreferences(state, action) {
      state.category = action.payload.category;
      state.difficulty = action.payload.difficulty;
    },
    getQuestions(state, action) {
      state.categorizedQuestions = questions.filter(
        (q) =>
          q.category === state.category && q.difficulty === state.difficulty
      );
      state.time = state.categorizedQuestions.length / 2;
    },

    updateScore(state, action) {
      const status = action.payload.status;
      if (status === "correct") state.score += 1;
    },

    addSelectedAns(state, action) {
      const ans = action.payload.selectedAns;
      console.log("ans", ans);
      state.givenAns = [...state.givenAns, ans];
    },

    resetTime(state,action){
      state.time=0
    }
  },
});

export const quizActions = quizSlice.actions;

export default quizSlice;
