import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//  The  configureStore  function accepts a configuration object with a  reducer  property. This is where we will add our reducers.
//  Next, we need to add our reducers to the store. We will create a  rootReducer  that combines all the reducers in our application.
