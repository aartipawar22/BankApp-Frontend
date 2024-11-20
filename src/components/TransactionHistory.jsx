import React from 'react';
import './TransactionHistory.css';

const TransactionHistory = () => {
    const transactions = [
        { id: 1, date: '2023-01-01', description: 'Deposit', amount: '$1,000' },
        { id: 2, date: '2023-01-02', description: 'Withdrawal', amount: '$200' },
        { id: 3, date: '2023-01-03', description: 'Transfer', amount: '$300' },
    ];

    return (
        <table className="transaction-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td>{transaction.id}</td>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionHistory;