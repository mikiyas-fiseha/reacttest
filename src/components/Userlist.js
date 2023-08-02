import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users from the backend API
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/allusers');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete('http://localhost:5000/api/users/deleteusers', { data: { userId } });
      // Refresh the user list after successful deletion
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };

  const handleUpdateUser = async (userId, newData) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/users/${userId}`, newData);
      // Update the user list with the updated user data
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user._id === userId ? response.data : user))
      );
    } catch (error) {
      console.error('Error updating user:', error.message);
    }
  };

  return (
    <div>
      <h2>List of Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
                <button
                  onClick={() =>
                    handleUpdateUser(user._id, {
                      email: 'updated.email@example.com', // Replace with the new email
                      password: 'newPassword', // Replace with the new password
                    })
                  }
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
