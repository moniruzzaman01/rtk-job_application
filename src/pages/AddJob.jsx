import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { useDispatch } from "react-redux";
import { addAJob } from "../features/jobs/jobsSlice";

export default function AddJob() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddForm = (data) => {
    dispatch(addAJob(data));
    navigate("/");
  };
  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>

        <div className="max-w-3xl mx-auto">
          <Form handleForm={handleAddForm} />
        </div>
      </main>
    </div>
  );
}
