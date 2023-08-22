import React, { useEffect, useState } from 'react';
import { BASE_URL2 } from '../utils/requestMethod';

// const BASE_URL = 'your_base_url_here';

function Contract() {
  const [pdfUrl, setPdfUrl] = useState('');

  const fetchAndDisplayPdf = () => {
    const locationSegments = window.location.pathname.split('/');
    const lastSegment = locationSegments[locationSegments.length - 1];

    // Assuming your PDF URLs are structured like `${BASE_URL}/pdfs/${pdfFileName}.pdf`
    const pdfFileName = lastSegment + '.pdf';
    const pdfUrl = `${BASE_URL2}pdf/contracts/contract_${pdfFileName}`;

    setPdfUrl(pdfUrl); // Store the PDF URL in the component state
  };

  useEffect(() => {
    fetchAndDisplayPdf();
  }, []);

  return (
    <div>
      {pdfUrl && (
        <iframe
          src={pdfUrl}
          width="100%"
          height="600px"
          title="PDF Viewer"
        />
      )}
    </div>
  );
}

export default Contract;
