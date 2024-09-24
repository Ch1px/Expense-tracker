import React from 'react';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className='transactionList-wrapper'>
      <h3>History</h3>
      {transactions.length === 0 ? (
        <p>No recent transactions</p>
      ) : (
        <ul className="list">
          {transactions.map(transaction => (
            <li key={transaction.id} className={transaction.amount > 0 ? 'plus' : 'minus'}>
              <div className='textAmountWrapper'>
                {transaction.text} <span>{transaction.amount > 0 ? '+' : '-'}£{Math.abs(transaction.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <button className="delete-btn" onClick={() => onDelete(transaction.id)}>x</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;