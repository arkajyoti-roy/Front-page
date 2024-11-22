import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Form = () => {
  const [name, setName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [selectedSubjectCode, setSelectedSubjectCode] = useState("");
  const [session, setSession] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  const branches = ["COMPUTER SCIENCE & ENGINEERING", "ECE", "ME"];
  const semesters = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

  const subjectsData = {
    "COMPUTER SCIENCE & ENGINEERING": {
      "3rd": [
        { name: "Effective Technical Communication", code: "CS301" },
        { name: "Mathematics-III", code: "CS302" },
        // Add other subjects as needed
      ],
      "4th": [
        { name: "Engineering Economics and Accountancy", code: "CS401" },
        // Add other subjects as needed
      ],
    },
    ECE: {
      "1st": [{ name: "Basic Electronics", code: "ECE101" }],
      "2nd": [{ name: "Analog Circuits", code: "ECE201" }],
    },
  };

  const handleBranchChange = (event) => {
    const branch = event.target.value;
    setSelectedBranch(branch);
    setSelectedSemester("");
    setSubjects([]);
    setSelectedSubject("");
  };

  const handleSemesterChange = (event) => {
    const semester = event.target.value;
    setSelectedSemester(semester);
    setSubjects(subjectsData[selectedBranch]?.[semester] || []);
    setSelectedSubject("");
    setSelectedSubjectCode("");
  };

  const handleSubjectChange = (event) => {
    const subject = event.target.value;
    setSelectedSubject(subject);
    const subjectCode =
      subjects.find((sub) => sub.name === subject)?.code || "";
    setSelectedSubjectCode(subjectCode);
  };

  const handleSubmit = () => {
    navigate("/display", {
      state: {
        name,
        selectedBranch,
        studentID,
        selectedSemester,
        rollNumber,
        selectedSubjectCode,
        selectedSubject,
        session,
      },
    });
  };

  return (


    <form action="" className="">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-10">
          <div className="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex relative flex-col justify-center self-stretch bg-gray-100 h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[70px]">
              <div className="w-[81px] h-[86px] aspect-auto">
                <img src="./lo.png" alt="" className="formimg" />
              </div>
            </div>
            <div className="flex flex-col self-stretch my-auto min-w-[240px]">
              <div className="text-base text-gray-800">
                TECHNO COLLEGE OF ENGINEERING
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Assignment & Project Front Page Maker...
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-10">
          <div id="input" className="relative">
            <input
              type="text"
              id="floating_outlined"
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label
              htmlFor="floating_outlined"
              className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Name
            </label>
          </div>

          <div id="input" className="relative">
            <select
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              value={selectedBranch}
              onChange={handleBranchChange}
            // className="form-select"
            >
              <option value="">Select Branch</option>
              {branches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
            <label
              htmlFor="floating_outlined"
              className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Branch
            </label>
          </div>

          <div id="input" className="relative">
            <input
              type="text"
              id="floating_outlined"
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              placeholder="Student Id"
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
            />
            <label
              htmlFor="floating_outlined"
              className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Student Id
            </label>
          </div>

          <div id="input" className="relative">
            <select
              value={selectedSemester}
              onChange={handleSemesterChange}
              disabled={!selectedBranch}
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
            >
              <option value="">Select Semester</option>
              {semesters.map((semester) => (
                <option key={semester} value={semester}>
                  {semester}
                </option>
              ))}
            </select>
            <label
              htmlFor="floating_outlined"
              className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Semester
            </label>
          </div>

          <div id="input" className="relative">
            <input
              type="text"
              id="floating_outlined"
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              placeholder="Roll no."
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
            />
            <label
              htmlFor="floating_outlined"
              className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Roll No.
            </label>
          </div>

          <div id="input" className="relative">
            <select
              value={selectedSubject}
              onChange={handleSubjectChange}
              disabled={!selectedSemester}
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
            >
              <option value="">Select Subject</option>
              {subjects.map((subject) => (
                <option key={subject.name} value={subject.name}>
                  {subject.name}
                </option>
              ))}
            </select>
            <label
              htmlFor="floating_outlined"
              className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Subject
            </label>
          </div>

          <div id="input" className="relative">
            <input
              type="phone"
              id="floating_outlined"
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              placeholder="Session"
              value={session}
              onChange={(e) => setSession(e.target.value)}
            />
            <label
              htmlFor="floating_outlined"
              className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Session
            </label>
          </div>

          <div id="input" className="relative">
            <input
              type="text"
              id="floating_outlined"
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
              placeholder="Subject Code"
              // value={selectedSubjectCode}
              // onChange={(e) => setselectedSubjectCode(e.target.value)}
              value={selectedSubjectCode}
              readOnly
            />
            <label
              htmlFor="floating_outlined"
              className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Subject Code
            </label>
          </div>
        </div>

        <div className="sm:flex sm:flex-row-reverse flex gap-4">
          <button
            className="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-violet-500 hover:bg-violet-600 focus:bg-violet-700 border-violet-500-violet- text-white focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300"
            type="button"
            onClick={handleSubmit}
          >
            <div className="flex gap-2 items-center">Submit</div>
          </button>
          <button
            className="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-transparent border-primary text-primary focus:ring-4 focus:ring-gray-100"
            type="reset"
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
