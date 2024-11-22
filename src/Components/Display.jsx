import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./style.css";

const Display = () => {
  const location = useLocation();
  const {
    name,
    selectedBranch,
    studentID,
    selectedSemester,
    rollNumber,
    selectedSubjectCode,
    selectedSubject,
    facultyName,
    assignment,
    designation,
    session,
    department,
  } = location.state;

  const pdfRef = useRef();

  const handleDownloadPDF = () => {
    const input = pdfRef.current;

    html2canvas(input, {
      allowTaint: true,
      useCORS: true,
      logging: true,
      scale: 4, // Ensure high-quality rendering
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = imgWidth / imgHeight;
      const height = pdfWidth / ratio;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, height > pdfHeight ? pdfHeight : height);
      pdf.save("download.pdf");
    });
  };

  return (
    <div>
      {/* PDF Content */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        className="details"
        ref={pdfRef}
        style={{
          marginTop: "-20%",
          border: "1px solid black",
          width: "210mm",
          height: "297mm",
          textAlign: "center",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "34px", marginTop: "-80px", fontWeight: "700", fontFamily: "Times New Roman" }}>
          Techno College of Engineering Agartala
        </h1>
        <br />
        <img
          src="./lo.png"
          alt=""
          style={{ width: "260px", alignContent: "center", marginLeft: "32%" }}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3 style={{ fontSize: "22px", fontWeight: "700", fontFamily: "Times New Roman", marginTop: "-20%" }}>
          {assignment}
        </h3>
        <span style={{ fontFamily: "Times New Roman", fontSize: "18px" }}>
          <b>Subject:</b>
        </span>
        <span style={{ fontFamily: "Times New Roman", fontSize: "18px" }}>
          &nbsp;{selectedSubject}
        </span>
        <br />
        <span style={{ fontFamily: "Times New Roman", fontSize: "18px" }}>
          <b>Subject Code:</b>
        </span>
        <span style={{ fontFamily: "Times New Roman", fontSize: "18px" }}>
          &nbsp;{selectedSubjectCode}
        </span>
        <br />
        <br />
        <p style={{ fontFamily: "Times New Roman", fontSize: "19px", textDecoration: "underline" }}>
          <b>Submitted To:</b>
        </p>
        <p style={{ fontFamily: "Times New Roman", fontSize: "17px", textDecoration: "none" }}>
          <b>{facultyName}</b>
        </p>
        <p style={{ fontFamily: "Times New Roman", fontSize: "17px", textDecoration: "none" }}>
          {designation}
        </p>
        <p style={{ fontFamily: "Times New Roman", fontSize: "17px", textDecoration: "none" }}>
          Department of {department}
        </p>
        <p style={{ fontFamily: "Times New Roman", fontSize: "17px", textDecoration: "none" }}>
          Techno College of Engineering Agartala
        </p>
        <br />
        <br />
        <p style={{ fontFamily: "Times New Roman", fontSize: "19px", textDecoration: "underline" }}>
          <b>Submitted By:</b>
        </p>
        <p style={{ fontFamily: "Times New Roman", fontSize: "17px", textDecoration: "none" }}>
          <b>{name}</b>
        </p>
        <p style={{ fontFamily: "Times New Roman", fontSize: "17px", textDecoration: "none" }}>
          <b>Student ID:</b>&nbsp;{studentID}
        </p>
        <p style={{ fontFamily: "Times New Roman", fontSize: "17px", textDecoration: "none" }}>
          <b>TU Roll No.:</b>&nbsp;{rollNumber}
        </p>
        <p style={{ fontFamily: "Times New Roman", fontSize: "17px", textDecoration: "none" }}>
          <b>Department:</b>&nbsp;{selectedBranch}
        </p>
        <p style={{ fontFamily: "Times New Roman", fontSize: "17px", textDecoration: "none" }}>
          <b>Semester:</b>&nbsp;{selectedSemester}
        </p>
        <p style={{ fontFamily: "Times New Roman", fontSize: "17px", textDecoration: "none" }}>
          <b>Session:</b>&nbsp;{session}
        </p>
        <br />
        <br />
        <p style={{ fontFamily: "Times New Roman", fontSize: "17px", textDecoration: "none" }}>
          <b style={{display: "none"}}>Date of Submission - 44/77/88</b>
        </p>
      </div>
      <br />
      <br />
      <button className="Download-button" onClick={handleDownloadPDF}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="20"
          viewBox="0 0 640 512"
        >
          <path
            d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
            fill="white"
          />
        </svg>
        <span>Download</span>
      </button>
    </div>
  );
};

export default Display;
