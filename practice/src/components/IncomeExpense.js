import React from 'react';

const IncomeExpense = ({ income, expense }) => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4 className='small-heading'>Income</h4>
        <p className="money plus">+£{income.toFixed(2)}</p>
      </div>
      <div>
        <h4 className='small-heading'>Expense</h4>
        <p className="money minus">-£{Math.abs(expense).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;