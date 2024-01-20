import axiosInstance from "../../axios/axiosInstance";

export const fetchAllJobs = async () => {
  const response = await axiosInstance.get("/jobs");
  return response.data;
};

export const fetchAJob = async (jobId) => {
  const response = await axiosInstance.get(`/jobs/${jobId}`);
  return response.data;
};

export const updateJob = async (jobId, data) => {
  const response = await axiosInstance.patch(`/jobs/${jobId}`, data);
  return response.data;
};

export const insertAJob = async (data) => {
  const response = await axiosInstance.post(`/jobs`, data);
  return response.data;
};
