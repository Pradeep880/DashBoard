// import React from 'react';
import { FaFileUpload, FaFileAlt, FaGlobe, FaLanguage,FaPlusCircle } from 'react-icons/fa';
import './Claim.css';
import FormSection from './FormSection';

function Claim() {
  return (
    <form className="claim-form">
      <h2>File your Claim <span>(Approx 5 Minutes)</span></h2>
      <div className="form-grid-row">
        <FormSection title="Claim Value" icon={<FaFileAlt />}>
          <input type="number" placeholder="Contract Value" required />
          <input type="number" placeholder="Claim Value" required />
        </FormSection>
        <FormSection title="Place" icon={<FaGlobe />}>
          <input type="text" placeholder="Select the place for proceedings" required />
          <div className="radio-group">
            <label><input type="radio" name="place" /> Yes</label>
            <label><input type="radio" name="place" /> No</label>
          </div>
        </FormSection>
        <FormSection title="Language" icon={<FaLanguage />}>
          <input type="text" placeholder="Select the language for proceedings" required />
          <div className="radio-group">
            <label><input type="radio" name="language" /> Yes</label>
            <label><input type="radio" name="language" /> No</label>
          </div>
        </FormSection>
      </div>
      <div className="form-grid-row">
        <FormSection title="Statement" icon={<FaFileAlt />}>
          <textarea placeholder="Write your statement here"></textarea>
          <div className="file-upload-group">
            <label htmlFor="statement-upload">Or upload your statement:</label>
            <input type="file" id="statement-upload" accept=".pdf,.doc,.docx,.txt" />
          </div>
        </FormSection>
        <FormSection title="Agreement under Disputes" icon={<FaFileUpload />}>
          <div className="file-upload-group">
            <label>
              <FaFileUpload className="upload-icon" />
              <span>Upload the Contract</span>
              <div className="upload-info">Max 2MB, PDF</div>
              <input type="file" accept=".pdf,.xml" />
            </label>
            <label>
              <FaFileUpload className="upload-icon" />
              <span>Arbitration Agreement</span>
              <div className="upload-info">Max 2MB, PDF</div>
              <input type="file" accept=".pdf,.xml" />
            </label>
          </div>
        </FormSection>
        <FormSection title="Additional Documentation" icon={<FaFileUpload />}>
          <label>
            <FaFileUpload className="upload-icon" />
            <span>Upload the Contract</span>
            <div className="upload-info">Max 2MB, PDF</div>
            <input type="file" accept=".pdf,.xml" />
          </label>
          <div className="add-more">
            <FaPlusCircle className="add-icon" />
          </div>
        </FormSection>
      </div>
      <button type="submit" className="submit-button">Submit Claim</button>
    </form>
  );
}

export default Claim;
