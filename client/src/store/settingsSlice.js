import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    googleTrends: [],
    trendingResortData: [],
  },
  reducers: {
    setGoogleTrends: (state, action) => {
      console.log("Set Google Trends: ");
      console.log(action.payload);
      state.googleTrends = action.payload;
    },
    setTrendingResortData: (state, action) => {
      console.log("Set Google Trends: ");
      console.log(action.payload);
      state.trendingResortData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGoogleTrends, setTrendingResortData } = settingsSlice.actions;

export default settingsSlice.reducer;
