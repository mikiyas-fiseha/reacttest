// src/components/Registration.js
import React, { useState } from 'react';
import axios from 'axios';
const Registration = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', formData);
      console.log(response.data.message);
    } catch (error) {
      console.error(error?.response?.data?.message);
      
    }
  };

  return (
    <div className='container'>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} className='form1'>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button className='btn' type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
