/* eslint-disable no-unused-vars */
// import React from 'react';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './style.css'
const Display = () => {
  const location = useLocation();
  const { name, rollNumber, selectedBranch, selectedSemester, selectedSubject } = location.state;

    const pdfRef = useRef();

    const handleDownloadPDF = () => {
      const input = pdfRef.current;
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = imgWidth / imgHeight;
        const height = pdfWidth / ratio;
  
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, height);
        pdf.save('download.pdf');
      });
    };

  return (
    <div>
      <div className='details'  ref={pdfRef} style={{ width: '210mm', height: '297mm' }}>
            {/* <p><strong>Name:</strong> {name}</p>
            <p><strong>Branch:</strong> {branch}</p>
            <p><strong>Roll no.:</strong> {roll}</p>
            <p><strong>Subject:</strong> {sub}</p>
            <p><strong>Semester:</strong> {sem}</p> */}
<h1>GOMATI DISTRICT POLYTECHNIC</h1>

<img src="./lo.png" alt="" />

<h2>DIPLOMA IN {selectedBranch}</h2>

<hr />
<h3>Assignment</h3>
<h3>{selectedSubject}</h3>
     
<p>SUBMITED BY</p>
<h2><b>{name}</b></h2>
<p>({rollNumber})</p>
<p>{selectedSemester} Semester Diploma in Engineering</p>
<hr />

<p>COMPUTER SCIENCE & TECHNOLOGY DEPARTMENT</p>
<h3><b>GOMATI DISTRICT POLYTECHNIC</b></h3>
<p>FULKUMARI, UDAIPUR, GOMATI TRIPURA - 799013, INDIA</p>

            </div>
            <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  )
}

export default Display