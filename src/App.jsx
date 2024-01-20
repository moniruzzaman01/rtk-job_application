import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadAllJobs } from "./features/jobs/jobsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllJobs());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
