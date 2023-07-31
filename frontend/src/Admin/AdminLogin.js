import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './adminLogin.css'; // Assuming you have a separate CSS file

const AdminLogin = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (adminId === '12345' && password === '12345') {
      // Redirect to another page
      window.location.href = '/admindash';

      // Show toast message
      toast.success('Login successful!');
    } else {
      toast.error('Login unsuccessful!');
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="adminId">Admin ID:</label>
          <input
            type="text"
            id="adminId"
            value={adminId}
            onChange={(event) => setAdminId(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/techlogin">Go to Tech Login</Link> {/* Add this link */}
      <ToastContainer
        className="toast-container"
        toastClassName="toast"
        position="top-right" // Update the position here
      />
    </div>
  );
};

export default AdminLogin;
