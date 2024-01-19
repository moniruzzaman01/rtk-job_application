import { useParams } from "react-router-dom";
import Filters from "../components/Filters";
import Job from "../components/Job";

export default function Home() {
  const { jobType } = useParams();

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

  return (
    <div className="lg:pl-[14rem]  mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
          {heading}
          <Filters />
        </div>

        <div className="jobs-list">
          <Job />
          <Job />
          <Job />
        </div>
      </main>
    </div>
  );
}
