import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllJobs } from "./jobsAPI";

const initialState = {
  isLoading: false,
  isError: false,
  jobs: [],
  error: "",
};

export const loadAllJobs = createAsyncThunk("jobs/loadAllJobs", async () => {
  const jobs = await fetchAllJobs();
  return jobs;
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadAllJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(loadAllJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs = action.payload;
      })
      .addCase(loadAllJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.jobs = [];
        state.error = action.error.message;
      });
  },
});

export default jobsSlice.reducer;
