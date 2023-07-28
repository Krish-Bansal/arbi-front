import React, { useState } from 'react';
import styled from 'styled-components';

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

const RemoveUser = () => {
  const [users, setUsers] = useState([
    'John Doe',
    'Jane Smith',
    'Bob Johnson',
    // Add more names to the initial list as needed
  ]);

  const removeUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <UserListWrapper>
      <ListHeader>User List</ListHeader>
      <ul>
        {users.map((user, index) => (
          <UserItem key={index}>
            {user}
            <RemoveButton onClick={() => removeUser(index)}>Remove</RemoveButton>
          </UserItem>
        ))}
      </ul>
    </UserListWrapper>
  );
};

export default RemoveUser;
