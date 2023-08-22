import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BASE_URL } from '../utils/requestMethod';
import axios from 'axios';

const EmailVerificationPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  const [verificationStatus, setVerificationStatus] = useState(null);

  const handleVerification = () => {
    setVerificationStatus('Verifying...');

    // Call your backend to verify the email when the button is clicked
    axios.patch(`${BASE_URL}/user/email-verify?token=${token}`)
      .then(response => {
        // Handle response here (e.g., show success message)
        setVerificationStatus('Email Verified Successfully!');
      })
      .catch(error => {
        // Handle error here (e.g., show error message)
        setVerificationStatus('Verification Failed');
      });
  };

  return (
    <div>
      {verificationStatus !== null ? (
        <p>{verificationStatus}</p>
      ) : (
        <button onClick={handleVerification}>Verify My Account</button>
      )}
    </div>
  );
};

export default EmailVerificationPage;
