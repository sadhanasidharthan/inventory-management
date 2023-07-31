import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminDash.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic or clear authentication state
    // For example, resetting isLoggedIn state or clearing tokens
    // Then navigate to the login page
    navigate('/adminlogin');
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/admindash">Dashboard</Link>
          </li>
          <li>
            <Link to="/adminrequest">Requests</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
      <h2>Admin Dashboard</h2>
      {/* Add content for the admin dashboard */}
    </div>
  );
};

export default AdminDashboard;
