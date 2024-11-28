import { Box, Typography } from "@mui/material";
import MainTitle from "./components/MainTitle";
import QuizSelectionBox from "./components/QuizSelectionBox";
import Instructions from "./components/Instructions";
import { useSelector } from "react-redux";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";
export type RootState = {
  ui: { quizOn: boolean; QuizPreferencesIsSet: boolean; viewResults: boolean,viewAns:boolean };
  quiz: {
    score: number;
    category: string;
    difficulty: string;
    categorizedQuestions: [];
    givenAns: [];
    time:number
  };
};

function App() {
  const quizOn = useSelector((state: RootState) => state.ui.quizOn);
  const QuizPreferencesIsSet = useSelector(
    (state: RootState) => state.ui.QuizPreferencesIsSet
  );

  return (
    <>
      <Box
        sx={{
          // border:'2px solid red',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!QuizPreferencesIsSet && <MainTitle />}
        {!QuizPreferencesIsSet && <QuizSelectionBox />}
        {QuizPreferencesIsSet && !quizOn && <Instructions />}
        {QuizPreferencesIsSet && quizOn && <Quiz />}
      </Box>
      <Footer/>
    </>
  );
}

export default App;
