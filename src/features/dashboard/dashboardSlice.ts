import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MemeImage } from "../meme-images-list/interface";

type MemeImageSelected = MemeImage | null;
export type TextBoxColor = "white" | "black";

export type TextBox = {
  text: string;
  color: TextBoxColor;
};

export type TextBoxAction = {
  index: number;
  box: TextBox;
};

export type TextBoxes = [TextBox, TextBox, TextBox, TextBox];

const textBoxesArray = Array(4);

const initialState = {
  textBoxes: textBoxesArray.fill({
    text: "",
    color: "black",
  }) as TextBoxes,
  image: null as MemeImageSelected,
  resetBoxIndex: -1,
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
    resetTextBox(state, action: PayloadAction<number>) {
      state.resetBoxIndex = action.payload;
      if (action.payload > -1) {
        state.textBoxes[action.payload].text = "";
      }

      return state;
    },
  },
});

export const {
  setImage: selectMemeImage,
  setTextBox,
  resetTextBox,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
