import { combineReducers } from "@reduxjs/toolkit";
import memeImages from "../features/meme-images-list/memeImagesSlice";

const rootReducer = combineReducers({ memeImages });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
