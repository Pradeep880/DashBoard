
import { FaCheckCircle } from 'react-icons/fa';
import './ProgressBar.css';

function ProgressBar() {
  const steps = ["Preliminary", "Your Details", "KYC", "Parties", "Claim", "Review", "Payment"];
  const completedSteps = 3; // Number of completed steps (this should be dynamically set based on your logic)

  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <div key={index} className={`progress-step ${index < completedSteps ? 'completed' : ''}`}>
          <div className="step-container">
            <div className={`step-number ${index < completedSteps ? 'completed' : ''}`}>
              {index < completedSteps ? <FaCheckCircle /> : index + 1}
            </div>
            <div className="step-label">{step}</div>
          </div>
          {index < steps.length - 1 && (
            <div className={`step-line ${index < completedSteps - 1 ? 'solid' : index === completedSteps - 1 ? 'dotted' : ''}`}></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
