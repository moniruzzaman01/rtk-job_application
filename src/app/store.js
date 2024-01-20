import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../features/jobs/jobsSlice";

const store = configureStore({
  reducer: jobsReducer,
});

export default store;
