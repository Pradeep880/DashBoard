// import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import Claim from './components/Claim';

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <main className="main-content">
        <ProgressBar />
        <Claim />
      </main>
    </div>
  );
}

export default App;
