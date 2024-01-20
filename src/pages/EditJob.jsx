import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { editJob } from "../features/jobs/jobsSlice";

export default function EditJob() {
  const { jobId } = useParams();
  const { jobs } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const job = jobs.find((job) => job.id == jobId);
  const navigate = useNavigate();

  const handleEditForm = (data) => {
    dispatch(editJob({ jobId, data }));
    navigate("/");
  };
  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

        <div className="max-w-3xl mx-auto">
          <Form job={job} handleForm={handleEditForm} />
        </div>
      </main>
    </div>
  );
}
