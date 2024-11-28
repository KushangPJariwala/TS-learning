import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Timer from "./Timer";
import { useDispatch ,useSelector} from "react-redux";
import { uiActions } from "../store/ui-slice";
import { quizActions } from "../store/quiz-slice";
import { RootState } from "../App";

const Instructions = () => {
  const dispatch = useDispatch();
  const quizData = useSelector(
    (state: RootState) => state.quiz.categorizedQuestions
  );

  return (
    <>
      <Timer/>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "10vh",
          height: "100vh",
          width: { xs: "85%", lg: "auto" },
        }}
      >
        <Box
          sx={{
            padding: "20px",
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Quiz Instructions:
          </Typography>
          <Typography variant="body1" gutterBottom>
            1. The quiz consists of ' n ' questions.
          </Typography>
          <Typography variant="body1" gutterBottom>
            2. You will have ' n/2 ' minutes to complete the quiz.
          </Typography>
          <Typography variant="body1" gutterBottom>
            3. You will get your score after submitting the quiz.
          </Typography>
        </Box>
       
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            mt: "4vh",
          }}
        >
          <Button
            variant="contained"
            size="large"
            color="error"
            onClick={() => {
              dispatch(uiActions.toggle({ btnType: "toggleSetPreferences" }));
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            size="large"
            color="success"
            onClick={() => {
              dispatch(uiActions.toggle({ btnType: "toggleQuizOn" }));
              dispatch(quizActions.getQuestions({}));
            }}
          >
            Start Quiz
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Instructions;
