import React from "react";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../App";
import { question } from "./Quiz";
const style = {
  p: 0,
  width: "100%",
  // maxWidth: 360,
  borderRadius: 2,
  borderColor: "divider",
  backgroundColor: "background.paper",
  mx: { lg: "2vh", xs: 0 },
  my: { lg: "1vh", xs: 0 },
};
const QuizResult = () => {
  const givenAns: question = useSelector(
    (state: RootState) => state.quiz.givenAns
  );
  return (
    <Box sx={{ border: "0px solid red", padding: { lg: "3vh", xs: 0 } }}>
      {givenAns.map((question, index) => (
        <Box key={index} mb={2} sx={{ pt: { xs: "2vh", lg: "4vh" } }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bolder" }}>
            Question {index + 1}:
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ px: { lg: "2vh", xs: 0 }, py: { lg: "1vh", xs: 0 } }}
          >
            {question.question}
          </Typography>
          <List sx={style} aria-label="mailbox folders">
            {question.options.map((o) => (
              <>
                <ListItem
                  sx={{
                    backgroundColor:
                      question.answer === o
                        ? "#009200c2"
                        : question.wrongSelected === o
                        ? "red"
                        : "",
                    color:
                      question.answer === o
                        ? "white"
                        : question.wrongSelected === o
                        ? "white"
                        : "black",
                    px: "2vh",
                    py: "1vh",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <ListItemText primary={o} sx={{ maxWidth: "85%" }} />
                    <span>
                      {question.wrongSelected && question.wrongSelected === "not answered"
                        ? "not answered"
                        : question.wrongSelected === o ||
                          (!question.wrongSelected && question.answer === o)
                        ? `your ans ${question.wrongSelected ? "🥴" : "😃"}`
                        : ""}
                    </span>
                  </div>
                </ListItem>
                <Divider component="li" />
              </>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default QuizResult;
