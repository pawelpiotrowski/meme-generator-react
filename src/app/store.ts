import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./rootReducer";

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

const store = makeStore();

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
