import React, { useState } from 'react';
import { BASE_URL } from '../utils/requestMethod';

const SetMPIN = () => {
  const [mpin, setMPIN] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMPIN(e.target.value);
  };
  // Get the current URL path
  const currentPath = window.location.pathname;

  // Split the path by '/'
  const pathParts = currentPath.split('/');

  // Get the last part, which should be the user ID
  const userId = pathParts[pathParts.length - 1];

  console.log(userId); // This will log the extracted user ID


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to your backend API to set the MPIN
    try {
      const response = await fetch(`${BASE_URL}/authorize/set-mpin/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mpin }), // Send the MPIN to the server
      });

      if (response.ok) {
        setMessage('MPIN set successfully!');
      } else {
        setMessage('Failed to set MPIN. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="mt-8 text-black">
      <h2>Set Your MPIN</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="mpin" className="block font-medium mb-2">
            4-Digit MPIN
          </label>
          <input
            type="password"
            id="mpin"
            name="mpin"
            value={mpin}
            onChange={handleChange}
            minLength="4"
            maxLength="4"
            required
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Set MPIN
          </button>
        </div>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default SetMPIN;
