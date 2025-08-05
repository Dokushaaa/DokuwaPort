"use client";
import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface PDFExportProps {
	filename?: string;
	targetRef?: React.RefObject<HTMLDivElement | null>;
	children?: React.ReactNode;
}
// todo change this name later
const PDFExport: React.FC<PDFExportProps> = ({
	filename = "document.pdf",
	targetRef,
	children,
}) => {
	// Create a default ref if none is provided
	const defaultRef = React.useRef<HTMLDivElement>(null);

	const handleExport = async () => {
		// Use the target ref if provided, otherwise use default ref
		const element = targetRef?.current || defaultRef.current;

		if (!element) {
			console.error("No element found to export");
			return;
		}

		try {
			// Use html2canvas to create an image of the div
			const canvas = await html2canvas(element, {
				scale: 2, // Higher scale for better quality
				useCORS: true, // Enable CORS for images
				logging: false,
				backgroundColor: "#ffffff",
			});

			// Get dimensions
			const imgWidth = 210; // A4 width in mm
			const pageHeight = 297; // A4 height in mm
			const imgHeight = (canvas.height * imgWidth) / canvas.width;

			// Create PDF
			const pdf = new jsPDF("p", "mm", "a4");
			let position = 0;

			// Add image to PDF
			pdf.addImage(
				canvas.toDataURL("image/png"),
				"PNG",
				0,
				position,
				imgWidth,
				imgHeight
			);
			console.clear;

			// Handle multi-page PDFs if content is long
			const remainingHeight = imgHeight - pageHeight;
			if (remainingHeight > 0) {
				let heightLeft = remainingHeight;
				let currentPosition = -pageHeight;

				while (heightLeft >= 0) {
					position = currentPosition;
					pdf.addPage();
					pdf.addImage(
						canvas.toDataURL("image/png"),
						"PNG",
						0,
						position,
						imgWidth,
						imgHeight
					);
					heightLeft -= pageHeight;
					currentPosition -= pageHeight;
				}
			}

			// Save the PDF
			pdf.save(filename);
		} catch (error) {
			console.error("Error generating PDF:", error);
		}
	};

	return (
		<div className='pdf-export'>
			<button
				onClick={handleExport}
				className='bg-blue-600 text-white font-medium px-4 py-2 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors'>
				Export as PDF
			</button>

			{/* Render children inside default ref if no target ref is provided */}
			{!targetRef ? (
				<div
					ref={defaultRef}
					className='mt-4'>
					{children}
				</div>
			) : null}
		</div>
	);
};

export default PDFExport;
