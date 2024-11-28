import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import quizSlice from "./quiz-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, quiz: quizSlice.reducer },
});

export default store;
