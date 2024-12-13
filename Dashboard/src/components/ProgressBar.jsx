// import React from 'react';
import './ProgressBar.css';

function ProgressBar() {
  return (
    <div className="progress-bar">
      <div className="step completed">Preliminary</div>
      <div className="step completed">Your Details</div>
      <div className="step completed">KYC</div>
      <div className="step active">Parties</div>
      <div className="step">Claim</div>
      <div className="step">Review</div>
      <div className="step">Payment</div>
    </div>
  );
}

export default ProgressBar;
