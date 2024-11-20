import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Personal from './components/Personal';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import Transaction from './components/Transaction'; 
import ContactUs from './components/ContactUs';
import './App.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
      <Router>
          <div className="App">
              {isLoggedIn && <Navbar />}
              <Routes>
                  <Route path="/login" element={<Login onLogin={handleLogin} />} />
                  <Route path="/landing" element={isLoggedIn ? <LandingPage /> : <Navigate to="/login" />} />
                  <Route path="/" element={isLoggedIn ? <Navigate to="/landing" /> : <Navigate to="/login" />} />
                  <Route path="/personal" element={isLoggedIn ? <Personal /> : <Navigate to="/login" />} />
                  <Route path="/contactus" element={<ContactUs />} />
                  <Route path="/transaction" element={isLoggedIn ? <Transaction /> : <Navigate to="/login" />} /> 
              </Routes>
          </div>
      </Router>
  );
};

export default App;
