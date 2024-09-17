import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ResumePrint from "./resume";

const GeneratePDF = () => {
  const resumeRef = useRef(); // Reference to the whole resume

  const handleGeneratePDF = async () => {
    const input = resumeRef.current;

    // Capture the resume content as a canvas
    html2canvas(input, {
      scale: 2, // Increase scale for better quality
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      // A4 page size: 210mm width, 297mm height
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // Add the image to the first page
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Check if there is content left to add additional pages
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("resume.pdf"); // Save the PDF
    });
  };

  return (
    <div className="p-5">
      {/* Button to download PDF */}
      <button
        onClick={handleGeneratePDF}
        className="px-4 py-2 bg-blue-600 text-white rounded mb-4"
      >
        Download Full Resume as PDF
      </button>

      {/* Resume preview section */}
      <div ref={resumeRef} className="shadow-lg border p-4 max-w-2xl mx-auto">
        <ResumePrint />
      </div>
    </div>
  );
};

export default GeneratePDF;
