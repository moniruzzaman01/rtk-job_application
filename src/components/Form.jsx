import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Form({ job, handleForm }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");
  useEffect(() => {
    if (job) {
      setTitle(job.title);
      setType(job.type);
      setSalary(job.salary);
      setDeadline(job.deadline);
    }
  }, [job]);
  const allTitles = [
    "Software Engineer",
    "Software Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "DevOps Engineer",
    "QA Engineer",
    "Product Manager",
    "Social Media Manager",
    "Senior Executive",
    "Junior Executive",
    "Android App Developer",
    "IOS App Developer",
    "Frontend Developer",
    "Frontend Engineer",
  ];
  const allTypes = ["Full Time", "Internship", "Remote"];

  return (
    <form className="space-y-6">
      <div className="fieldContainer">
        <label
          htmlFor="lws-JobTitle"
          className="text-sm font-medium text-slate-300"
        >
          Job Title
        </label>
        <select
          onChange={(e) => setTitle(e.target.value)}
          id="lws-JobTitle"
          name="lwsJobTitle"
          required
        >
          <option hidden>{title ? title : "Select Job"}</option>
          {allTitles.map((t, key) => (
            <option key={key} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobType">Job Type</label>
        <select
          onChange={(e) => setType(e.target.value)}
          id="lws-JobType"
          name="lwsJobType"
          required
        >
          <option hidden>{type ? type : "Select Job Type"}</option>
          {allTypes.map((t, key) => (
            <option key={key} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobSalary">Salary</label>
        <div className="flex border rounded-md shadow-sm border-slate-600">
          <span className="input-tag">BDT</span>
          <input
            type="number"
            name="lwsJobSalary"
            id="lws-JobSalary"
            required
            className="!rounded-l-none !border-0"
            placeholder="20,00,000"
            defaultValue={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-JobDeadline">Deadline</label>
        <input
          type="date"
          name="lwsJobDeadline"
          id="lws-JobDeadline"
          required
          defaultValue={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      <div className="text-right">
        <button
          type="button"
          id="lws-submit"
          className="cursor-pointer btn btn-primary w-fit"
          onClick={() => handleForm({ title, type, salary, deadline })}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  job: PropTypes.object,
  handleForm: PropTypes.func,
};
