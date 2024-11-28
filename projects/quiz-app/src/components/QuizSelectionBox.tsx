import React, { useRef } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { RootState } from "../App";
import { quizActions } from "../store/quiz-slice";

const QuizSelectionBox = () => {
  const dispatch = useDispatch();
 
  const selectedCategoryRef = useRef<HTMLSelectElement>(null);
  const selectedDifficultyRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const selectedCategory = selectedCategoryRef.current!.value;
    const selectedDifficulty = selectedDifficultyRef.current!.value;

    // Dispatch action or perform any other operations here
    dispatch(uiActions.toggle({ btnType: "toggleSetPreferences" }));
    dispatch(
      quizActions.setPreferences({
        category: selectedCategory,
        difficulty: selectedDifficulty,
      })
    );
  };

  return (
    <Box
      sx={{
        padding: "5vh",
        backgroundColor: "#ffffff", // white background color
        borderRadius: "8px",
        boxShadow: "2px 2px 40px #F3F2FD", // box shadow
        maxWidth: "400px", // optional: restrict width if needed
        margin: "auto", // center the box horizontally
        mt: "6vh",
      }}
    >
      <Typography
        variant="h5"
        sx={{ pb: "4vh", fontWeight: 700, color: "#04015B" }}
      >
        Select your preferences
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ marginBottom: "16px" }}>
          {/* Select Category :  */}
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            defaultValue=""
            label="Category"
            required
            inputRef={selectedCategoryRef}
          >
            <MenuItem value="Cricket">Cricket</MenuItem>
            <MenuItem value="Science">Science</MenuItem>
            <MenuItem value="General nkowledge">General Knowledge</MenuItem>
            <MenuItem value="IPL">IPL</MenuItem>
           
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="difficulty-select-label">Difficulty</InputLabel>
          <Select
            labelId="difficulty-select-label"
            id="difficulty-select"
            defaultValue=""
            label="Difficulty"
            required
            inputRef={selectedDifficultyRef}
          >
            <MenuItem value="Easy">Easy</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Difficult">Hard</MenuItem>
          </Select>
          <div style={{ marginTop: "3vh" }}>
            <Button type="submit" variant="contained" size="medium">
              Submit
            </Button>
          </div>
        </FormControl>
      </form>
    </Box>
  );
};

export default QuizSelectionBox;
