// import React from 'react';
import {FaPlusCircle } from 'react-icons/fa';
import { PiPlusMinusBold  } from "react-icons/pi";
import { IoLanguageSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineClipboardDocumentList, HiClipboardDocument } from "react-icons/hi2";
import { MdCloudUpload } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import './Claim.css';
import FormSection from './FormSection';

function Claim() {
  return (
    <form className="claim-form">
      <h2>File your Claim <span>(Approx 5 Minutes)</span></h2>
      <div className="form-grid-row">
        <FormSection title="Claim Value" icon={<PiPlusMinusBold />}>
          <input type="number" placeholder="Contract Value" required />
          <input type="number" placeholder="Claim Value" required />
        </FormSection>
        <FormSection title="Place" icon={<CiLocationOn  />}>
          <input type="text" placeholder="Select the place for proceedings" required />
          <div className="radio-group">
            <label><input type="radio" name="place" /> Yes</label>
            <label><input type="radio" name="place" /> No</label>
          </div>
        </FormSection>
        <FormSection title="Language" icon={<IoLanguageSharp  />}>
          <input type="text" placeholder="Select the language for proceedings" required />
          <div className="radio-group">
            <label><input type="radio" name="language" /> Yes</label>
            <label><input type="radio" name="language" /> No</label>
          </div>
        </FormSection>
      </div>
      <div className="form-grid-row">
        <FormSection title="Statement" icon={< HiClipboardDocument />}>
          <div className="file-upload">
          <textarea  className='text-area'
           placeholder="Write your statement here"></textarea>
            <label >
              <div>or</div>
              <div>

            <MdCloudUpload className='upload-cloud1'/>
            <span className="upload-name">upload your file</span>
            <input type="file" accept=".pdf,.doc,.docx,.txt" />
              </div>
            </label>
          </div>
        </FormSection>
        <FormSection title="Agreement under Disputes" icon={<HiOutlineDocumentText />}>
          <div className="file-upload-group">
            <label>
            <MdCloudUpload className='upload-cloud'/>
              <span className="upload-name">Upload the Contract</span>
              <div className="upload-info">Max 2MB, PDF</div>
              <input type="file" accept=".pdf,.xml" />
            </label>
            <label>
            <MdCloudUpload className='upload-cloud'/>
              <span className="upload-name">Arbitration Agreement</span>
              <div className="upload-info">Max 2MB, PDF</div>
              <input type="file" accept=".pdf,.xml" />
            </label>
          </div>
        </FormSection>
        
        <FormSection title="Additional Documentation" icon={<HiOutlineClipboardDocumentList />}>
        <div className="file-upload-group">
        <label>
            <MdCloudUpload className='upload-cloud'/>
              <span className="upload-name">Upload the Contract</span>
              <div className="upload-info">Max 2MB, PDF</div>
              <input type="file" accept=".pdf,.xml" />
            </label>
          <div className="add-more">
            <FaPlusCircle className="add-icon" />
          </div>
          </div>
        </FormSection>
      </div>
      {/* <button type="submit" className="submit-button">Submit Claim</button> */}
    </form>
  );
}

export default Claim;
