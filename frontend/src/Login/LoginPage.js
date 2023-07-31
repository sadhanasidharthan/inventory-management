import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './NewLoginPage.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get('http://127.0.0.1:8080/emailandpassword');
      const fetchedData = response.data;
  
      // Check if the email and password match the fetched data
      const foundUser = fetchedData.find((user) => user.email === email && user.password === password);
  
      if (foundUser) {
        // Perform login logic or set tokens or perform any other actions
        console.log('Login successful:', foundUser);
        setLoginError('');
        // Redirect to the home page or perform further actions
        window.location.href = '/home';
      } else {
        // Handle login failure, such as displaying an error message
        setLoginError('Invalid email or password');
      }
    } catch (error) {
      // Handle login error, such as displaying an error message
      console.log('Login failed:', error);
      setLoginError('Login failed. Please try again later.');
    }
  };

  return (
    <div className="login">
      
       <h1 className="wel">Welcome To Inventory</h1>
      <h2 className="wel1">Login</h2>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="login-label">Email:</label>
            <input
              type="email"
              id="email"
              className="login-input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="login-label">Password:</label>
            <input
              type="password"
              id="password"
              className="login-input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      {loginError && <p className="error-message">{loginError}</p>}
      <p>
        Don't have an account? <Link to="/register" style={{ color: 'white' }}>Register</Link>
      </p>
      <p>
        Admin login? <Link to="/adminlogin" style={{ color: 'white' }}>Admin Log!</Link>
      </p>
    </div>
  );
};

export default Login;