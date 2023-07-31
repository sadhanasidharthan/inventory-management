import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RegisterPage from './Register/RegisterPage';
import LoginPage from './Login/LoginPage';
import HomePage from './HomePage';
import AdminLogin from './Admin/AdminLogin';
import AdminDashboard from './AdminDashboard';
//import AdminLogin from './pages/AdminLogin';
import RequestPage from './RequestPage';
import AboutUs from './Aboutas';
import ContactUsForm from './Contactus';
import RecordsTable from './Tech';
import Login from './TechLogin';
const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/adminlogin" element={<AdminLogin />}/>
        <Route path="/admindash" element={<AdminDashboard />}/>
        <Route path="/adminrequest" element={<RequestPage />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/contact" element={<ContactUsForm />}/>
        <Route path="/tech" element={<RecordsTable />}/>
        <Route path="/techlogin" element={<Login />}/>
      </Routes>
    </Router>
  );
};

export default App;
 