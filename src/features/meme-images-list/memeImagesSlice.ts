import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, AppDispatch } from "app/store";
import { MemeImage, MemeImagesData } from "./interface";

type MemeImageSelected = MemeImage | null;

const initialState = {
  list: [] as MemeImage[],
  hasError: false,
  isLoading: false,
  selected: null as MemeImageSelected,
};

const memeImagesSlice = createSlice({
  name: "memeImages",
  initialState,
  reducers: {
    loaded(state, action: PayloadAction<MemeImage[]>) {
      return {
        ...state,
        hasError: false,
        isLoading: false,
        list: action.payload,
      };
    },
    loadError(state) {
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    },
    load(state) {
      return {
        ...state,
        hasError: false,
        isLoading: true,
      };
    },
    select(state, action: PayloadAction<MemeImageSelected>) {
      return {
        ...state,
        selected: action.payload,
      };
    },
  },
});

export const { select: selectMemeImage } = memeImagesSlice.actions;

export const loadMemeImages = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(memeImagesSlice.actions.load());

  const response = await fetch("/api/meme-images");
  const result = (await response.json()) as MemeImagesData;

  if (result.error !== null) {
    dispatch(memeImagesSlice.actions.loadError());
    return;
  }

  dispatch(memeImagesSlice.actions.loaded(result.data.memes));
};

export default memeImagesSlice.reducer;
