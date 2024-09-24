import React from 'react';

const Balance = ({ balance }) => {
  return (
    <>
      <h4>Your Balance</h4>
      <h1>£{balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
    </>
  );
};

export default Balance;