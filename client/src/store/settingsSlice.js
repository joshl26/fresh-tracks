import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    pomodoro: 25,
    short: 5,
    long: 15,
    autobreak: false,
    autopomo: false,
    timermode: 1,
    timerenabled: false,
    currenttime: 25,
    cycle: [1, 2, 1, 2, 1, 2, 1, 2, 3],
    counter: 0,
    cyclecomplete: false,
    googleTrends: [],
  },
  reducers: {
    pomoIncrement: (state) => {
      console.log("Pomo increment...");
      //limit pomodoro state to 40 minutes (max)
      if (Number(state.pomodoro) >= 40) {
        state.pomodoro = 40;
      } else {
        state.pomodoro += 1;
      }
    },
    pomoDecrement: (state) => {
      console.log("Pomo decrement...");
      //limit pomodoro state to 20 minutes (min)
      if (Number(state.pomodoro) <= 1) {
        state.pomodoro = 1;
      } else {
        state.pomodoro -= 1;
      }
    },
    pomoIncrementByAmount: (state, action) => {
      console.log("Pomo increment by amount: " + action.payload);

      state.pomodoro += action.payload;
    },

    shortIncrement: (state) => {
      console.log("Short increment...");
      //limit short state to 10 minutes (max)
      if (Number(state.short) >= 10) {
        state.short = 10;
      } else {
        state.short += 1;
      }
    },
    shortDecrement: (state) => {
      console.log("Short decrement...");
      //limit short state to 5 minutes (min)
      if (Number(state.short) <= 1) {
        state.short = 1;
      } else {
        state.short -= 1;
      }
    },
    shortIncrementByAmount: (state, action) => {
      console.log("Short increment by amount: " + action.payload);
      state.short += action.payload;
    },

    longIncrement: (state) => {
      console.log("Long increment...");
      //limit long state to 25 minutes (max)
      if (Number(state.long) >= 30) {
        state.long = 30;
      } else {
        state.long += 1;
      }
    },
    longDecrement: (state) => {
      console.log("Long decrement...");
      //limit short state to 10 minutes (min)
      if (Number(state.long) <= 1) {
        state.long = 1;
      } else {
        state.long -= 1;
      }
    },
    longDecrementByAmount: (state, action) => {
      console.log("Long decrement by amount: " + action.payload);
      state.long += action.payload;
    },
    autoPomo: (state) => {
      console.log("Auto pomo state flip...");
      state.autopomo = !state.autopomo;
    },
    autoBreakBoolean: (state) => {
      console.log("Auto break state flip...");
      state.autobreak = !state.autobreak;
    },
    autoBreak: (state, action) => {
      console.log("Auto break state set: " + action.payload);
      state.autobreak = action.payload;
    },
    timerMode: (state, action) => {
      console.log("Timer mode state set: " + action.payload);
      state.timermode = action.payload;
    },
    timerEnabled: (state) => {
      console.log("Timer enabled state flip...");
      state.timerenabled = !state.timerenabled;
    },
    setTimerEnabled: (state, action) => {
      console.log("Timer enabled state set: " + action.payload);
      state.timerenabled = action.payload;
    },
    setCurrentTime: (state) => {
      console.log("Current time state set...");
      //Check timermode and set current time accordingly
      if (Number(state.timermode) > 3) {
        return;
      }
      if (Number(state.timermode) <= 0) {
        return;
      }
      if (Number(state.timermode) === 1) {
        state.currenttime = state.pomodoro;
      }
      if (Number(state.timermode) === 2) {
        state.currenttime = state.short;
      }
      if (Number(state.timermode) === 3) {
        state.currenttime = state.long;
      }
    },
    setDefault: (state) => {
      console.log("Reset to defaults...");
      state.pomodoro = 25;
      state.short = 5;
      state.long = 15;
      state.autobreak = false;
      state.autopomo = false;
      state.timermode = 1;
      state.timerenabled = false;
      state.currenttime = 25;
      state.cycle = [1, 2, 1, 2, 1, 2, 1, 2, 3];
      state.counter = 0;
      state.cyclecomplete = false;
    },
    counterIncrement: (state) => {
      console.log("Counter increment...");

      if (Number(state.counter) <= 8) {
        state.counter += 1;
        return;
      }
      if (Number(state.counter) === 8) {
        state.counter = 1;
        return;
      } else {
        return;
      }
    },
    counterDecrement: (state) => {
      console.log("Counter decrement...");
      if (Number(state.counter) > 0) {
        state.counter -= 1;
      }
    },
    setCounter: (state, action) => {
      console.log("Set Counter: " + action.payload);
      state.counter = action.payload;
    },
    setCycleComplete: (state) => {
      console.log("setCycleComplete");
      state.cyclecomplete = true;

      //Increment counter automatically if autobreak is true
      // if (state.autobreak === true) {
      //   console.log("Increment Counter...");

      //   //set max counter increment = cycle state array overall length
      //   if (Number(state.counter) <= 8) {
      //     console.log("Counter: " + state.counter);
      //     state.counter += 1;
      //     if (Number(state.counter) === 8) {
      //       console.log("Counter Reset: " + state.counter);
      //       state.counter = 0;
      //     }
      //   }
      // } else {
      //   state.timerenabled = false;
      // }
      // state.timermode = state.cycle[state.counter];
    },
    setCycleStart: (state) => {
      state.cyclecomplete = false;
    },

    setCycle: (state, action) => {
      console.log("Set Cycle Complete: " + action.payload);
      state.cyclecomplete = action.payload;
    },
    setGoogleTrends: (state, action) => {
      console.log("Set Google Trends: ");
      console.log(action.payload);
      state.googleTrends = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  pomoIncrement,
  pomoDecrement,
  pomoIncrementByAmount,
  shortIncrement,
  shortDecrement,
  shortIncrementByAmount,
  longIncrement,
  longDecrement,
  longDecrementByAmount,
  autoPomo,
  autoBreak,
  autoBreakBoolean,
  timerMode,
  timerEnabled,
  setTimerEnabled,
  setCurrentTime,
  setDefault,
  counterIncrement,
  counterDecrement,
  setCounter,
  setCycleComplete,
  setCycleStart,
  setCycle,
  setGoogleTrends,
} = settingsSlice.actions;

export default settingsSlice.reducer;
