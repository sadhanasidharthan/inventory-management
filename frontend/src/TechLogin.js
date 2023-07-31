import React, { useState, useEffect } from "react";
//import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [techID, setTechID] = useState("");
  const [techPassword, setTechPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [redirectToTech, setRedirectToTech] = useState(false);

  const handleLogin = () => {
    // Replace the credentials below with the actual login information from your backend or authentication system
    const validID = "12345";
    const validPassword = "12345";

    if (techID === validID && techPassword === validPassword) {
      setLoginStatus("Login successful!");
      setRedirectToTech(true);
    } else {
      setLoginStatus("Invalid TechID or TechPassword. Please try again.");
    }
  };

  useEffect(() => {
    if (redirectToTech) {
      // Redirect to the "/tech" route after a successful login
      window.location.href = "/tech";
    }
  }, [redirectToTech]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Tech Login</h4>
              <div className="form-group">
                <label htmlFor="techID">TechID</label>
                <input
                  type="text"
                  className="form-control"
                  id="techID"
                  value={techID}
                  onChange={(e) => setTechID(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="techPassword">TechPassword</label>
                <input
                  type="password"
                  className="form-control"
                  id="techPassword"
                  value={techPassword}
                  onChange={(e) => setTechPassword(e.target.value)}
                />
              </div>
              <Link to="/tech"></Link>
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
                
              </button>
             
              {loginStatus && <p className="mt-2">{loginStatus}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
