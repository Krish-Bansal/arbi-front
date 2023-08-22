import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/requestMethod';

const ListOfUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    // Fetch data when the component mounts
    axios.get(`${BASE_URL}/authorize/users`, { headers }) // Replace 'your-api-endpoint' with the actual API endpoint
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>Name:</strong> {user.nameOfUser}<br />
            <strong>Email:</strong> {user.email}<br />
            <strong>Aadhar No:</strong> {user.aadharNo}<br />
            <strong>WhatsApp No:</strong> {user.whatsAppNumber}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfUsers;
