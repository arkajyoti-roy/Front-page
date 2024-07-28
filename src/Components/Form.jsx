import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'
const Form = () => {
    const [name, setName] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [selectedBranch, setSelectedBranch] = useState('');
    const [selectedSemester, setSelectedSemester] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
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
    setSelectedSemester('');
    setSubjects([]);
    setSelectedSubject('');
  };

  const handleSemesterChange = (event) => {
    const semester = event.target.value;
    setSelectedSemester(semester);
    setSubjects(subjectsData[selectedBranch][semester] || []);
    setSelectedSubject('');
  };

  const handleSubjectChange = (event) => {
    const subject = event.target.value;
    setSelectedSubject(subject);
  };

  const handleSubmit = () => {
    navigate('/display', { state: { name, rollNumber, selectedBranch, selectedSemester, selectedSubject } });
  };

  return (
 
    <div>
    <h1>Select Branch, Semester, and Subject</h1>
    <div>
      <label>Name: </label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div>
      <label>Roll Number: </label>
      <input type="text" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
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
      <select value={selectedSemester} onChange={handleSemesterChange} disabled={!selectedBranch}>
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
      <select value={selectedSubject} onChange={handleSubjectChange} disabled={!selectedSemester}>
        <option value="">Select Subject</option>
        {subjects.map((subject) => (
          <option key={subject} value={subject}>
            {subject}
          </option>
        ))}
      </select>
    </div>
    <button onClick={handleSubmit}>Submit</button>
  </div>
   
  );
};

export default Form;
