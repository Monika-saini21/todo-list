import { createSlice } from "@reduxjs/toolkit";

const darkmode = createSlice({
     name: "darkmode",
  initialState: {
    dark: false, 
  },
  reducers: {
    toggleDarkmode :(state)=>{
        state.dark = !state.dark;  
    },
   
  }
});

export const {toggleDarkmode} = darkmode.actions;
export default darkmode.reducer;