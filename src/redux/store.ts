import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/user/UserSlicer";

const rootReducer = combineReducers({
  users: userSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,

  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']