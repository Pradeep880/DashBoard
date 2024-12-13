import { useState } from 'react';
import './Claim.css';

function ClaimForm() {
  const [contractValue, setContractValue] = useState('');
  const [claimValue, setClaimValue] = useState('');
  const [place, setPlace] = useState('');
  const [language, setLanguage] = useState('');
  const [statement, setStatement] = useState('');
  const [agreement, setAgreement] = useState(null);
  const [additionalDocs, setAdditionalDocs] = useState([]);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!contractValue) errors.contractValue = 'Required';
    if (!claimValue) errors.claimValue = 'Required';
    if (!place) errors.place = 'Required';
    if (!language) errors.language = 'Required';
    if (!statement) errors.statement = 'Required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log({
        contractValue,
        claimValue,
        place,
        language,
        statement,
        agreement,
        additionalDocs
      });
      // Handle form submission
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="claim-form">
      <h2>Claim Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="contractValue">Contract Value</label>
        <input
          id="contractValue"
          name="contractValue"
          type="text"
          value={contractValue}
          onChange={(e) => setContractValue(e.target.value)}
        />
        {errors.contractValue && <div className="error">{errors.contractValue}</div>}

        <label htmlFor="claimValue">Claim Value</label>
        <input
          id="claimValue"
          name="claimValue"
          type="text"
          value={claimValue}
          onChange={(e) => setClaimValue(e.target.value)}
        />
        {errors.claimValue && <div className="error">{errors.claimValue}</div>}

        <label htmlFor="place">Place</label>
        <input
          id="place"
          name="place"
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        {errors.place && <div className="error">{errors.place}</div>}

        <label htmlFor="language">Language</label>
        <input
          id="language"
          name="language"
          type="text"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        {errors.language && <div className="error">{errors.language}</div>}

        <label htmlFor="statement">Statement</label>
        <textarea
          id="statement"
          name="statement"
          value={statement}
          onChange={(e) => setStatement(e.target.value)}
        />
        {errors.statement && <div className="error">{errors.statement}</div>}

        <label htmlFor="agreement">Agreement under Disputes</label>
        <input
          id="agreement"
          name="agreement"
          type="file"
          onChange={(e) => setAgreement(e.target.files[0])}
        />
        {errors.agreement && <div className="error">{errors.agreement}</div>}

        <label htmlFor="additionalDocs">Additional Documentation</label>
        <input
          id="additionalDocs"
          name="additionalDocs"
          type="file"
          multiple
          onChange={(e) => setAdditionalDocs(Array.from(e.target.files))}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ClaimForm;
