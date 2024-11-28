import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from "@mui/material";
import Timer from "./Timer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../App";
import { quizActions } from "../store/quiz-slice";
import { uiActions } from "../store/ui-slice";
import QuizResult from "./QuizResult";

export type question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  difficulty: string;
  category: string;
  wrongSelected: string;
}[];
const Quiz = () => {
  const dispatch = useDispatch();
  const viewResults = useSelector((state: RootState) => state.ui.viewResults);
  const viewAns = useSelector((state: RootState) => state.ui.viewAns);
  const score = useSelector((state: RootState) => state.quiz.score);
  const time = useSelector((state: RootState) => state.quiz.time);
  console.log("time", time);
  // Dummy quiz data
  const quizData: question = useSelector(
    (state: RootState) => state.quiz.categorizedQuestions
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  let selectedAns = {};

  const handleNextQuestion = () => {
    // Check if the selected option is correct
    if (selectedOption === quizData[currentQuestion].answer && time !== 0) {
      dispatch(quizActions.updateScore({ status: "correct" }));
      selectedAns = { ...quizData[currentQuestion] };
    } else {
      dispatch(quizActions.updateScore({ status: "incorrect" }));
      selectedAns = {
        ...quizData[currentQuestion],
        wrongSelected: selectedOption,
      };
    }
    dispatch(quizActions.addSelectedAns({ selectedAns }));

    // Move to the next question
    setSelectedOption("");
    setCurrentQuestion(currentQuestion + 1);

    if (currentQuestion === quizData.length - 1) {
      dispatch(quizActions.resetTime({}));
    }
  };

  if (time === 0) {
    console.log("out");
    let n = currentQuestion;
    for (let i = n; i < quizData.length; i++) {
      console.log("i", i);
      selectedAns = {
        ...quizData[i],
        wrongSelected: "not answered",
      };
      setCurrentQuestion(quizData.length);
      dispatch(quizActions.addSelectedAns({ selectedAns }));
    }
  }
  return (
    <>
      <Timer />
      <Box
        sx={{
          width: { xs: "80%", lg: "50%" },
          mt: "5vh",
          padding: { xs: "3vh", lg: "5vh" },
          backgroundColor: "#EAFAFD",
          borderRadius: "10px",
        }}
      >
        {currentQuestion < quizData.length ? (
          <>
            <Box>
              <Typography variant="h4" gutterBottom>
                Question {currentQuestion + 1} of {quizData.length}:
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontWeight: 700, mt: "5vh" }}
              >
                {quizData[currentQuestion].question}
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  {quizData[currentQuestion].options.map((option, index) => (
                    <FormControlLabel
                      key={index}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNextQuestion}
              sx={{ marginTop: "20px" }}
              disabled={time === 2 ? true : false}
            >
              Next
            </Button>
          </>
        ) : (
          // Quiz finished, display score

          <>
            <center>
              <Typography variant="h4" gutterBottom>
                Quiz Finished! 🎉
              </Typography>
              <div style={{ marginTop: "3vh" }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="medium"
                  color="success"
                  onClick={() =>
                    dispatch(uiActions.toggle({ btnType: "toggleViewResults" }))
                  }
                >
                  View Results
                </Button>
              </div>
            </center>
            {viewResults && (
              <>
                <center>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      mt: "5vh",
                      fontSize: { xs: "3vh", lg: "4vh" },
                      fontWeight: "bolder",
                    }}
                  >
                    Your score is: {score}/{quizData.length}
                  </Typography>
                  <Button
                    type="submit"
                    variant="contained"
                    size="medium"
                    onClick={() =>
                      dispatch(uiActions.toggle({ btnType: "toggleViewAns" }))
                    }
                  >
                    See Your Answers
                  </Button>
                </center>
                {viewAns && <QuizResult />}
              </>
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default Quiz;
