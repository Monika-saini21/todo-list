import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/taskSlice";
import darkmodeReducer from "../features/darkmode";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    darkmode: darkmodeReducer,
    search: searchReducer
  }
});

export default store;