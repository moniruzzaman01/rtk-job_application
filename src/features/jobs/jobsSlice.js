import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteAJob,
  fetchAJob,
  fetchAllJobs,
  insertAJob,
  updateJob,
} from "./jobsAPI";

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

export const loadAJob = createAsyncThunk("jobs/loadAJob", async (jobId) => {
  const job = await fetchAJob(jobId);
  return job;
});

export const editJob = createAsyncThunk(
  "/jobs/editJob",
  async ({ jobId, data }) => {
    const job = await updateJob(jobId, data);
    return job;
  }
);

export const addAJob = createAsyncThunk("jobs/addAJob", async (data) => {
  const job = await insertAJob(data);
  return job;
});

export const removeAJob = createAsyncThunk("jobs/removeAJob", async (jobId) => {
  const job = await deleteAJob(jobId);
  return job;
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
      // .addCase(loadAllJobs.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.jobs = [];
      //   state.error = action.error.message;
      // })
      .addCase(editJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(editJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs = state.jobs.map((job) => {
          if (job.id == action.payload.id) {
            return action.payload;
          }
          return job;
        });
      })
      // .addCase(editJob.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.jobs = [];
      //   state.error = action.error.message;
      // });
      .addCase(addAJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addAJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs.push(action.payload);
      })
      // .addCase(addAJob.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.jobs = [];
      //   state.error = action.error.message;
      // });
      .addCase(removeAJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeAJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs = state.jobs.filter((job) => job.id != action.meta.arg);
      });
    // .addCase(removeAJob.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.jobs = [];
    //   state.error = action.error.message;
    // });
  },
});

export default jobsSlice.reducer;
