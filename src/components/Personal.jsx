import React, { useEffect, useState } from 'react';
import './Personal.css';
import TransactionHistory from './TransactionHistory';

const Personal = () => {
    const [userDetails, setUserDetails] = useState({
        name: "",
        accountBalance: "",
        accountNumber: "",
    });

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const token = localStorage.getItem("authToken"); 
                const response = await fetch("/api/user/details", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user details");
                }

                const data = await response.json();
                setUserDetails(data);
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        fetchUserDetails();
    }, []);

    return (
        <div className="inner-container">
            <div className="personal-container">
                <h2>User Details</h2>
                <p>Name: {userDetails.name}</p>
                <div className="cards-container">
                    <div className="card">
                        <h3>Account Balance</h3>
                        <p>{userDetails.accountBalance}</p>
                    </div>
                    <div className="card">
                        <h3>Account Number</h3>
                        <p>{userDetails.accountNumber}</p>
                    </div>
                </div>
                <h3>Transaction History</h3>
                <TransactionHistory />
            </div>
        </div>
    );
};

export default Personal;
