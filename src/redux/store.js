import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/taskSlice";
import darkmodeReducer from "../features/darkmode";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    darkmode: darkmodeReducer
  }
});

export default store;