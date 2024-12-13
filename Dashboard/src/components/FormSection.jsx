// import React from 'react';
import './Formsection.css';

function FormSection({ title, icon, children }) {
  return (
    <div className="form-section">
      <div className="section-header">
        {icon && <div className="section-icon">{icon}</div>}
        <h3>{title}</h3>
      </div>
      {children}
    </div>
  );
}

export default FormSection;
