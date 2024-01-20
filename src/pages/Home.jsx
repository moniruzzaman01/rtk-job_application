import { useParams } from "react-router-dom";
import Filters from "../components/Filters";
import Job from "../components/Job";
import { useSelector } from "react-redux";

export default function Home() {
  const { jobType } = useParams();
  const { jobs, isLoading, isError, error } = useSelector(
    (state) => state.jobs
  );

  let heading;
  if (!jobType) {
    heading = <h1 className="lws-section-title">All Available Jobs</h1>;
  } else if (jobType == "internship") {
    heading = <h1 className="lws-section-title">Available Internship Jobs</h1>;
  } else if (jobType == "fulltime") {
    heading = <h1 className="lws-section-title">Available Full Time Jobs</h1>;
  } else if (jobType == "remote") {
    heading = <h1 className="lws-section-title">Available Remote Jobs</h1>;
  }

  let content;
  if (isLoading) {
    content = (
      <h1 style={{ color: "#fff" }} className=" text-center">
        Loading...
      </h1>
    );
  } else if (isError) {
    content = (
      <h1 style={{ color: "red" }} className=" text-center">
        {error}
      </h1>
    );
  } else {
    content = jobs
      .filter((job) => {
        if (!jobType) {
          return true;
        } else if (job.type.split(" ").join("").toLowerCase() == jobType) {
          return true;
        }
      })
      .map((job, key) => <Job key={key} job={job} />);
  }

  return (
    <div className="lg:pl-[14rem]  mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
          {heading}
          <Filters />
        </div>

        <div className="jobs-list">{content}</div>
      </main>
    </div>
  );
}
