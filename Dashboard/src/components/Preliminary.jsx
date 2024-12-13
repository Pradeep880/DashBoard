import React, { useState } from 'react';
import './Preliminary.css';

function Preliminary() {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!field1) errors.field1 = 'Required';
    if (!field2) errors.field2 = 'Required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log({ field1, field2 });
      // Handle form submission
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="preliminary">
      <h2>Preliminary</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="field1">Field 1</label>
        <input
          id="field1"
          name="field1"
          type="text"
          value={field1}
          onChange={(e) => setField1(e.target.value)}
        />
        {errors.field1 && <div className="error">{errors.field1}</div>}

        <label htmlFor="field2">Field 2</label>
        <input
          id="field2"
          name="field2"
          type="text"
          value={field2}
          onChange={(e) => setField2(e.target.value)}
        />
        {errors.field2 && <div className="error">{errors.field2}</div>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Preliminary;
