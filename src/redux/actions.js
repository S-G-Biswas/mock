import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_AMOUNT,
  CHANGE_SCORE,
} from "./actionsTypes";

export const handleCategoryChange = (payload) => ({
  type: CHANGE_CATEGORY,
  payload,
});

export const handleDifficultyChange = (payload) => ({
  type: CHANGE_DIFFICULTY,
  payload,
});

export const handleNameChange = (payload) => ({
  type: "HANDLE_NAME_CHANGE",
  payload,
});

export const handleAmountChange = (payload) => ({
  type: CHANGE_AMOUNT,
  payload,
});

export const handleScoreChange = (payload) => ({
  type: CHANGE_SCORE,
  payload,
});
