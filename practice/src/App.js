import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem('transactions')) || []
  );

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const calculateAmounts = () => {
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(amount => amount > 0).reduce((acc, item) => (acc += item), 0);
    const expense = amounts.filter(amount => amount < 0).reduce((acc, item) => (acc += item), 0);
    const balance = amounts.reduce((acc, item) => (acc += item), 0);
    return { income, expense, balance };
  };

  const { income, expense, balance } = calculateAmounts();

  return (
    <div className='wrapper'>
      <div className="container">
        <Header />
        <div className='flex-wrapper'>
          <AddTransaction onAdd={addTransaction} />
          <div className='right'>
            <Balance balance={balance} />
            <IncomeExpense income={income} expense={expense} />
          </div>
        </div>
        <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      </div>
    </div>
  );
}

export default App;