import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Transaction.css';

const Transaction = () => {
  const [accountId, setAccountId] = useState('');
  const [amount, setAmount] = useState('');
  const [operation, setOperation] = useState('deposit');
  const [message, setMessage] = useState('');
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    
    const fetchAccountBalance = async () => {
      try {
        const response = await axios.get(`/api/accounts/${accountId}/balance`);
        setBalance(response.data.balance);
      } catch (error) {
        setMessage(`Error fetching balance: ${error.response?.data?.message || error.message}`);
      }
    };

    if (accountId) {
      fetchAccountBalance();
    }
  }, [accountId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (amount <= 0) {
      setMessage('Amount must be greater than 0.');
      return;
    }

    try {
      const response = await axios.post(`/api/accounts/${accountId}/${operation}`, { amount });
      setBalance(response.data.balance); 
      setMessage(`Successfully ${operation}ed: ${response.data.balance}`);
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="transaction-container">
      <h2>Deposit / Withdraw</h2>
      
     
      {balance !== null && (
        <div className="balance-card">
          <h3>Account Balance</h3>
          <p>${balance}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="transaction-form">
        <div className="form-field">
          <label htmlFor="accountId">Account ID:</label>
          <input
            type="text"
            id="accountId"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            placeholder="Enter Account ID"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="operation">Operation:</label>
          <select
            id="operation"
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
            required
          />
        </div>

        <button type="submit" className="submit-btn">{operation} Money</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Transaction;
