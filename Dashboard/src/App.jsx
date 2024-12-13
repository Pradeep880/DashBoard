// import React from 'react';
import Preliminary from './components/Preliminary';
import YourDetails from './components/Details';
import KYC from './components/Kyc';
import ClaimForm from './components/Claim';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="progress-bar">
        <div className="progress">Step 1</div>
        <div className="progress">Step 2</div>
        <div className="progress">Step 3</div>
        <div className="progress">Step 4</div>
        <div className="progress">Step 5</div>
        <div className="progress">Step 6</div>
        <div className="progress">Step 7</div>
      </div>
      <Dashboard/>
      <Preliminary />
      <YourDetails />
      <KYC />
      <ClaimForm />
    </div>
  );
}

export default App;
