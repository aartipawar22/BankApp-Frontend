import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const navigate = useNavigate(); 
    const handleSubmit = async () => {
        
        const payload = { email, accountNumber, password };
    
        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
    
            if (response.ok) {
                alert("Login successful!");
                onLogin(); 
                navigate('/landing'); 
            } else {
                const errorMessage = await response.text();
                alert(`Login failed: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred while trying to log in. Please try again.');
        }
    };
    

    return (
        <div className='container'>
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="Email Icon" />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="input">
                    <img src={email_icon} alt="Account Number Icon" />
                    <input 
                        type="text" 
                        placeholder="Account Number" 
                        value={accountNumber} 
                        onChange={(e) => setAccountNumber(e.target.value)} 
                    />
                </div>
                <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
            </div>
        
            <div className="submit-container">
                <div className="submit" onClick={handleSubmit}>Login</div>
            </div>
        </div>
    );
};

export default Login;
