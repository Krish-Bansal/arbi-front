import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/requestMethod';

function ExecutedContractPage() {
  const [pdfFiles, setPdfFiles] = useState([]);
  const PREFIX = 'contract_';
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('auth');
      if (token) {
        try {
          const response = await axios.get(`${BASE_URL}/contract/executed-contracts`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          // Handle the response here
          console.log('Response from server:', response.data);
          setPdfFiles(response.data.data.pdfFiles); // Update the pdfFiles state with the data from the server
        } catch (error) {
          // Handle any errors that occur during the request
          console.error('Error fetching data:', error);
        }
      } else {
        // Handle the case when the token is not found in local storage
        console.error('Token not found in local storage');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Executed Contracts</h2>
      {pdfFiles.length > 0 ? (
        <ol>
          {pdfFiles.map((pdf, index) => (
            <li key={index}>
              <a href={`/contract/${pdf.replace(PREFIX, '')}`} target="_blank" rel="noreferrer">
                {pdf}</a>
            </li>
          ))}
        </ol>
      ) : (
        <p>No pending contracts found.</p>
      )}
    </div>
  );
}

export default ExecutedContractPage;