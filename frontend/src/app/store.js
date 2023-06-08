import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../services/cardSlice";

export const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});
