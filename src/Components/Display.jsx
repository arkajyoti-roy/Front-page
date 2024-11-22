/* eslint-disable no-unused-vars */
// import React from 'react';
import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./style.css";
const Display = () => {
  const location = useLocation();
  const {
    name,
    rollNumber,
    selectedBranch,
    selectedSemester,
    selectedSubject,
  } = location.state;

  const pdfRef = useRef();
  // const zoomLevel = 0.4;
  // const zoomLevel = 0.55;

  // const [zoomLevel, setZoomLevel] = useState(1);

  // useEffect(() => {
  //   const checkDeviceType = () => {
  //     if (window.innerWidth <= 768) {
  //       setZoomLevel(0.4);
  //     } else {
  //       setZoomLevel(0.55);
  //     }
  //   };

  //   window.addEventListener("resize", checkDeviceType);
  //   checkDeviceType();

  //   return () => window.removeEventListener("resize", checkDeviceType);
  // }, []);

  // const handleDownloadPDF = () => {
  //   const input = pdfRef.current;
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/pdf");
  //     const pdf = new jsPDF("p", "mm", "a4");
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = pdf.internal.pageSize.getHeight();
  //     const imgWidth = canvas.width;
  //     const imgHeight = canvas.height;
  //     const ratio = imgWidth / imgHeight;
  //     const height = pdfWidth / ratio;

  //     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, height);
  //     pdf.save("download.pdf");
  //   });
  // };


  ///////////////////////////////////////////////////

  // const handleDownloadPDF = () => {
  //   const input = pdfRef.current;
  
  //   html2canvas(input, {
  //     // Adjust these options as needed
  //     // imageRendering: 'pixelated', // Or 'optimizeSpeed'
  //     allowTaint: true,
  //     useCORS: true,
  //     logging: true, // Enable logging for debugging
  //     scale: 5,
  //     // scale: 0.8, // Reduce the size by 20%
  // imageRendering: 'optimizeSpeed',
  //   }).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF('p', 'mm', 'a4');
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = pdf.internal.pageSize.getHeight();
  //     // const imgWidth = canvas.width;
  //     // const imgHeight = canvas.height;
  
  //     // ... (rest of the code for calculating dimensions and adding image to PDF)
  //     pdf.addImage(imgData, "PDF", 0, 0, pdfWidth, pdfHeight);
  //     pdf.save('download.pdf');
  //   });
  // };

////////////////////////////////////////////////////////////////////

const handleDownloadPDF = () => {
  const input = pdfRef.current;
  
  html2canvas(input, {
    allowTaint: true,
    useCORS: true,
    logging: true,
    scale: 4 // Ensure high-quality rendering
  }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Calculate aspect ratio to fit within PDF dimensions
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = imgWidth / imgHeight;
    const height = pdfWidth / ratio;

    // Ensure we maintain aspect ratio and don't stretch the image
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, height > pdfHeight ? pdfHeight : height);
    pdf.save('download.pdf');
  });
};


// const dof=()=>{

// }


  return (
    <div
      // style={{
      //   transform: `scale(${zoomLevel})`,
      //   transformOrigin: "0 1",
      //   // width: `${100 / zoomLevel}%`,
      //   // height: `${100 / zoomLevel}%`,
      //   overflow: "hidden",
      // }}
    >
      {/* <div className='pdff'> */}

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
          marginTop: "-18%",
          border: "1px solid black",
          width: "210mm",
          height: "297mm",
          textAlign: "center",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >

        <h3 style={{ fontSize: "22px", fontWeight: "700" ,fontFamily: "Times New Roman",marginTop:"-20%"}}>
          Assignment
        </h3>
        <h1 style={{ fontSize: "34px", fontWeight: "700" ,fontFamily: "Times New Roman"}}>
          Techno College of Engineering Agartala
        </h1>
<br />
        <span style={{fontFamily: "Times New Roman",fontSize: "18px",}}><b>Course Title:</b></span>
        <span style={{fontFamily: "Times New Roman",fontSize: "18px",}}>&nbsp;Concrete Technology</span>
        <br />
        <span style={{fontFamily: "Times New Roman",fontSize: "18px",}}><b>Course Code:</b></span>
        <span style={{fontFamily: "Times New Roman",fontSize: "18px",}}>&nbsp;CEP117</span>
        <br />
        <br />
        <img
          src="./lo.png"
          alt=""
          style={{ width: "260px", alignContent: "center", marginLeft: "32%" }}
        />
        <br />
        <p style={{fontFamily: "Times New Roman",fontSize: "19px", textDecoration: "underline"}}><b>Submitted to</b></p>
        {/* <br /> */}
        <p style={{fontFamily: "Times New Roman",fontSize: "17px", textDecoration: "none"}}><b>Dr. ABC ABC</b></p>
        <p style={{fontFamily: "Times New Roman",fontSize: "17px", textDecoration: "none"}}>Assistant Professor</p>
        <p style={{fontFamily: "Times New Roman",fontSize: "17px", textDecoration: "none"}}>Department of Civil Engineering</p>
        <p style={{fontFamily: "Times New Roman",fontSize: "17px", textDecoration: "none"}}>Techno College of Engineering Agartala</p>

        <br />
        <br />
        <p style={{fontFamily: "Times New Roman",fontSize: "19px", textDecoration: "underline"}}><b>Submitted by</b></p>
        {/* <br /> */}
        <p style={{fontFamily: "Times New Roman",fontSize: "17px", textDecoration: "none"}}><b>Sexy Sexy</b></p>
        <p style={{fontFamily: "Times New Roman",fontSize: "17px", textDecoration: "none"}}><b>Student ID:</b>&nbsp;12345678910</p>
        <p style={{fontFamily: "Times New Roman",fontSize: "17px", textDecoration: "none"}}><b>TU Roll No.:</b>&nbsp;12345678910</p>
        <p style={{fontFamily: "Times New Roman",fontSize: "17px", textDecoration: "none"}}><b>Department:</b>&nbsp;12345678910</p>
        <p style={{fontFamily: "Times New Roman",fontSize: "17px", textDecoration: "none"}}><b>Semester:</b>&nbsp;12345678910</p>
        <br />
        <br />
        <p style={{fontFamily: "Times New Roman",fontSize: "17px", textDecoration: "none"}}><b>Date of Submission - 44/77/88</b></p>



 

        {/* </div> */}
      </div>
      <br />
      <br />
      <button className="Download-button" onClick={handleDownloadPDF}>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="20"
          viewBox="0 0 640 512"
        >
          <path
            d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
            fill="white"
          ></path>
        </svg> */}
        {/* <span>Download</span> */}
      </button>
    </div>
  );
};

export default Display;
