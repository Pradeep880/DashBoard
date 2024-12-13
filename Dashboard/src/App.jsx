// import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import Claim from './components/Claim';

function App() {
  return (
    <div className='main-container'>
    <div className="app-container">
      <Navigation />
      <main className="main-content">
        <ProgressBar />
        <Claim />
      </main>
    </div>
    </div>
  );
}

export default App;
