import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, AppDispatch } from "app/store";
import { MemeImage, MemeImagesData } from "./interface";

const initialState: MemeImage[] = [];

const memeImagesSlice = createSlice({
  name: "memeImages",
  initialState,
  reducers: {
    load(state, action: PayloadAction<MemeImage[]>) {
      console.log(action);
      // concat arrays and filter out duplicates
      // https://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items
      // state.concat(action.payload.filter((item) => state.indexOf(item) < 0));
      // actually thanks to Immer integration
      // we are safe to mutate state
      state = action.payload;
      return state;
    },
  },
});

export const loadMemeImages = (): AppThunk => async (dispatch: AppDispatch) => {
  const response = await fetch("/api/meme-images");
  const result = (await response.json()) as MemeImagesData;

  dispatch(memeImagesSlice.actions.load(result.data.memes));
};

export default memeImagesSlice.reducer;
