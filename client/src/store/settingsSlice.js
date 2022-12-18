import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    googleTrends: [],
  },
  reducers: {
    setGoogleTrends: (state, action) => {
      console.log("Set Google Trends: ");
      console.log(action.payload);
      state.googleTrends = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGoogleTrends } = settingsSlice.actions;

export default settingsSlice.reducer;
