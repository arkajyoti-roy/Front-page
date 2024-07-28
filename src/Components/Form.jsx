import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Form = () => {
  const [name, setName] = useState("");
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
      // '1st': ['Introduction to Programming', 'Mathematics I'],
      // '2nd': ['Data Structures', 'Mathematics II'],
      "3rd": [
        "Effective Technical Communication",
        "Mathematics-III",
        "Biology for Engineers",
        "Engineering Mechanics",
        "Digital Logic & Microprocessor",
        "Data Structure & Algorithm",
        "Java Programming Lab",
        "Data Structure Lab",
        "Digital Electronics & Microprocessor Lab",
        "Indian Constitution",
      ],
      "4th": [
        "Engineering Economics and Accountancy",
        "Universal Human Values-II: Understanding Harmony",
        "Discrete Mathematics",
        "Computer Organization & Architecture",
        "Operating Systems",
        "Object Oriented Programming",
        "IT Workshop",
        "Operating System Lab",
        "Object Oriented Programming Lab",
        "Essence of Indian Knowledge Tradition",
      ],
      "5th": [
        "Professional Practice, Law and Ethics",
        "Design and Analysis of Algorithm",
        "Database Management Systems",
        "Formal Language & Automata Theory",
        "Artificial Intelligence",
        "Computer Networks",
        "Algorithm Lab",
        "Database Management System Lab",
        "Computer Hardware & Network Lab",
      ],
      "6th": [
        "Digital Image Processing",
        "Compiler Design",
        "Cryptography and Network Security",
        "Software Engineering",
        "Advanced Java Lab",
        "Web Technology Lab",
        "Image Processing Lab",
        "Advanced Computer Architecture",
        "Data Mining",
        "Web Technology",
      ],
      "7th": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      "8th": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],

      // Add more semesters and subjects as needed
    },
    ECE: {
      "1st": ["Basic Electronics", "Mathematics I"],
      "2nd": ["Analog Circuits", "Mathematics II"],
      "3rd": ["Digital Systems", "Communication"],
      // Add more semesters and subjects as needed
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
    setSubjects(subjectsData[selectedBranch][semester] || []);
    setSelectedSubject("");
  };

  const handleSubjectChange = (event) => {
    const subject = event.target.value;
    setSelectedSubject(subject);
  };

  const handleSubmit = () => {
    navigate("/display", {
      state: {
        name,
        rollNumber,
        selectedBranch,
        selectedSemester,
        selectedSubject,
      },
    });
  };

  return (
    <div className="fom">
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Roll Number: </label>
        <input
          type="text"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
      </div>
      <div>
        <label>Branch: </label>
        <select value={selectedBranch} onChange={handleBranchChange}>
          <option value="">Select Branch</option>
          {branches.map((branch) => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Semester: </label>
        <select
          value={selectedSemester}
          onChange={handleSemesterChange}
          disabled={!selectedBranch}
        >
          <option value="">Select Semester</option>
          {semesters.map((semester) => (
            <option key={semester} value={semester}>
              {semester}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Subject: </label>
        <select
          value={selectedSubject}
          onChange={handleSubjectChange}
          disabled={!selectedSemester}
        >
          <option value="">Select Subject</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>
      <br /><br /><br />
      <button onClick={handleSubmit}>Submit</button>




            


      <div className="max-w-md mx-auto">
      <div className="relative z-0 w-full mb-5 group">
      <input  type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)} name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>className
  
  

 
  <button type="submit" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</div>



      
    </div>
  );
};

export default Form;
