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
      <div className='details' ref={pdfRef} style={{ marginLeft: '24%', marginTop: '4%', border: '1px solid black', width: '210mm', height: '297mm', textAlign: 'center', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
        {/* <p><strong>Name:</strong> {name}</p>
            <p><strong>Branch:</strong> {branch}</p>
            <p><strong>Roll no.:</strong> {roll}</p>
            <p><strong>Subject:</strong> {sub}</p>
            <p><strong>Semester:</strong> {sem}</p> */}
        <h1 style={{ fontSize: '30px', fontWeight: '700' }}>GOMATI DISTRICT POLYTECHNIC</h1>
        <br />
        <br />
        <br />
        <img src="./lo.png" alt="" style={{ width: "200px", alignContent: 'center', marginLeft: '38%' }} />
        <br />
        <br />
        <h2>DIPLOMA IN {selectedBranch}</h2>
        <br />
        <hr style={{ border: 'solid 0.1px black',margin:'50px' }}/>
        <br />
        <h3>Assignment</h3>
        <h3>{selectedSubject}</h3>
        <br />
        <p>SUBMITED BY</p>
        <h2><b>{name}</b></h2>
        <p>({rollNumber})</p>
        <br />
        <p>{selectedSemester} Semester Diploma in Engineering</p>
        <br />
        <hr style={{ border: 'solid 0.1px black',margin:'50px' }}/>
        <br />
        <p>COMPUTER SCIENCE & TECHNOLOGY DEPARTMENT</p>
        <h3><b>GOMATI DISTRICT POLYTECHNIC</b></h3>
        <p>FULKUMARI, UDAIPUR, GOMATI TRIPURA - 799013, INDIA</p>

      </div>
      <br /><br />
      <button className="btnn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-64 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  )
}

export default Display