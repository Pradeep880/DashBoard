import { useState } from 'react';
import './Kyc.css';

function KYC() {
  const [kycNumber, setKycNumber] = useState('');
  const [kycDocument, setKycDocument] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!kycNumber) errors.kycNumber = 'Required';
    if (!kycDocument) errors.kycDocument = 'Required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log({ kycNumber, kycDocument });
      // Handle form submission
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="kyc">
      <h2>KYC</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="kycNumber">KYC Number</label>
        <input
          id="kycNumber"
          name="kycNumber"
          type="text"
          value={kycNumber}
          onChange={(e) => setKycNumber(e.target.value)}
        />
        {errors.kycNumber && <div className="error">{errors.kycNumber}</div>}

        <label htmlFor="kycDocument">Upload KYC Document</label>
        <input
          id="kycDocument"
          name="kycDocument"
          type="file"
          onChange={(e) => setKycDocument(e.target.files[0])}
        />
        {errors.kycDocument && <div className="error">{errors.kycDocument}</div>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default KYC;
