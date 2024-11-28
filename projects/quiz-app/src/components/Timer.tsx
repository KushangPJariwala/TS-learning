import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../App";
import { CheckCircle, ArrowBack } from "@mui/icons-material";
import { uiActions } from "../store/ui-slice";
import { quizActions } from "../store/quiz-slice";
type Props = {};

export default function Timer({}: Props) {
  const time = useSelector((state: RootState) => state.quiz.time) || NaN;
  const dispatch = useDispatch();

  const [seconds, setSeconds] = useState(time * 60);


  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(interval);
          console.log("finish")
    dispatch(quizActions.resetTime({}));
    window.alert("Your Time is over...⌛\nEnd of the quiz")
          // You can handle the timer expiration here, like showing a message or triggering an action
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const handleBack = () => {
    const back = window.confirm("do you want to quit the quiz?");
    if (back) {
      dispatch(uiActions.toggle({ btnType: "toggleSetPreferences" }));
      dispatch(uiActions.toggle({ btnType: "toggleSetPreferences" }));
      dispatch(uiActions.toggle({ btnType: "toggleSetPreferences" }));
    }
  };
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          gap: {
            xs: "2vh",
            lg: 0,
          },
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span onClick={handleBack}>
              <ArrowBack fontSize="large" />
            </span>
            &nbsp;&nbsp; <span>General Knowledge Quiz Application</span>
          </div>
        </Typography>

        {/* Timer on the right side */}
        <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>-
          Time Remains: {isNaN(time) ? "--:--" : formatTime(seconds)}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
