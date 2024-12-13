// import  { useState } from 'react';
import './ProgressBar.css';

function ProgressBar() {
  const steps = ["Preliminary", "Your Details", "KYC", "Parties", "Claim", "Review", "Payment"];
  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <div key={index} className={`progress-step ${index < 4 ? 'completed' : ''}`}>
          <div className="step-number">{index + 1}</div>
          <div className="step-label">{step}</div>
        </div>
      ))}
    </div>
  );
}
export default ProgressBar;