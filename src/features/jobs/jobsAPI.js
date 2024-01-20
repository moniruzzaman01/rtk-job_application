import axiosInstance from "../../axios/axiosInstance";

export const fetchAllJobs = async () => {
  const response = await axiosInstance.get("/jobs");
  return response.data;
};
