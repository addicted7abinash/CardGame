import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cardService from "./cardservice";

const initialState = {
  cards: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getCards = createAsyncThunk("/", async (_, thunkAPI) => {
  try {
    return await cardService.getCards();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cards = action.payload;
      })
      .addCase(getCards.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = cardSlice.actions;
export default cardSlice.reducer;
