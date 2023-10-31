import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/requestMethod';

function AcceptContractPage() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const locationSegments = window.location.pathname.split('/');
  const lastSegment = locationSegments[locationSegments.length - 1];
  const handlePasswordSubmit = async () => {
    try {
      setLoading(true);
      setErrorMessage('');
      const response = await axios.post(`${BASE_URL}/contract/accept`, { password, contractnumber: lastSegment });
    } catch (error) {
      setErrorMessage('Error accepting contract. Please check your mPIN.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Enter mPIN to Accept Contract</h1>
      <input
        type="password"
        placeholder="mPIN"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handlePasswordSubmit} disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default AcceptContractPage;
