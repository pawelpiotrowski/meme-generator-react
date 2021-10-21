import { combineReducers } from "@reduxjs/toolkit";
import memeImages from "../features/meme-images-list/memeImagesSlice";
import dashboard from "../features/dashboard/dashboardSlice";

const rootReducer = combineReducers({ dashboard, memeImages });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
