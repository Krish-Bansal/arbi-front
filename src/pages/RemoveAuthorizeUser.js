import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BASE_URL } from '../utils/requestMethod';
import axios from 'axios';

const UserListWrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const ListHeader = styled.h2`
  margin-bottom: 10px;
`;

const UserItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid #ccc;
`;

const RemoveButton = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`;

const RemoveButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RemoveUser = () => {
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
  const handleRemoveClick = async (authId) => {
    const token = localStorage.getItem('admin');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      await axios.delete(`${BASE_URL}/authorize/remove-user/${authId}`, { headers });

      // Fetch updated user list or update the state in some way
      const response = await axios.get(`${BASE_URL}/authorize/users`, { headers });
      const updatedUserList = response.data;      // Update the state with the updated user list
      setUsers(prevUsers => {
        // Use the prevUsers to update the state with the new data
        return updatedUserList; // Make sure this is the correct updated data
      });
    } catch (error) {
      console.error('Error removing user:', error);
    }
  };






  return (
    <UserListWrapper>
      <ListHeader>User List</ListHeader>
      <ol>
        {users && Array.isArray(users) && users.map((user, index) => (<UserItem key={index}>
          <div>
            <strong>Name:</strong> {user?.nameOfUser}<br />
            <strong>Email:</strong> {user?.email}<br />
            <strong>Aadhar No:</strong> {user?.aadharNo}<br />
            <strong>WhatsApp No:</strong> {user?.whatsAppNumber}
          </div>
          <RemoveButtonContainer>
            <RemoveButton onClick={() => handleRemoveClick(user._id)}>Remove</RemoveButton>
          </RemoveButtonContainer>
        </UserItem>
        ))}
      </ol>
    </UserListWrapper>
  );
};

export default RemoveUser;
