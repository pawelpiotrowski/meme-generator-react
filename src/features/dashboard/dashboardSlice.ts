import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MemeImage } from "../meme-images-list/interface";

type MemeImageSelected = MemeImage | null;
export type TextBox = {
  text: string;
};
export type TextBoxAction = {
  index: number;
  box: TextBox;
};
export type TextBoxes = [TextBox, TextBox, TextBox, TextBox];

const textBoxesArray = Array(4);

const initialState = {
  textBoxes: textBoxesArray.fill({ text: "" }) as TextBoxes,
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
    setTextBox(state, action: PayloadAction<TextBoxAction>) {
      const { index, box } = action.payload;

      state.textBoxes = state.textBoxes.map((b, i) =>
        i === index ? box : b
      ) as TextBoxes;
      return state;
    },
  },
});

export const { setImage: selectMemeImage, setTextBox } = dashboardSlice.actions;

export default dashboardSlice.reducer;
