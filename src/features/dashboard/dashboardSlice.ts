import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MemeImage } from "../meme-images-list/interface";

type MemeImageSelected = MemeImage | null;
export type TextBoxes = [string, string, string, string];

const initialState = {
  textBoxes: ["", "", "", ""] as TextBoxes,
  image: null as MemeImageSelected,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setImage(state, action: PayloadAction<MemeImageSelected>) {
      return {
        ...state,
        image: action.payload,
      };
    },
    setTextBox(state, action: PayloadAction<{ text: string; index: number }>) {
      const { index, text } = action.payload;

      state.textBoxes = state.textBoxes.map((t, i) =>
        i === index ? text : t
      ) as TextBoxes;
      return state;
    },
  },
});

export const { setImage: selectMemeImage, setTextBox } = dashboardSlice.actions;

export default dashboardSlice.reducer;
