import React, { useState, useEffect } from 'react';
import './css/App.css'; // Import your CSS file
import NavigationBar from './NavigationBar';

function App() {
  const [showInfo, setShowInfo] = useState(false);

  // Use useEffect to trigger the animation when the component mounts
  useEffect(() => {
    // Add a slight delay to give the page time to render
    setTimeout(() => {
      setShowInfo(true);
    }, 500); // Adjust the delay time as needed
  }, []);

  return (
    <div className="background-container">
      <NavigationBar />
      <div id="min-div">
        <h1 id="title-name" className={showInfo ? 'move-up' : ''}>
          Yo, I'm Faisal
        </h1>
        <h2 id="subtitle" className={showInfo ? 'move-up' : ''}>
          Software Developer in Python & C++
        </h2>
        {showInfo && (
          <div className="social-links">
            <a href="https://www.youtube.com/channel/UC4ZEJ6S7L__oWlt5v5jiFMg" target="_blank" rel="noopener noreferrer">
              <span style={{ backgroundColor: '#74e3a4', top: '20px' }}>You</span><span style={{ backgroundColor: '#d6a12e' }}>tube</span>
            </a>
            <a href="https://github.com/VoidyCD?tab=repositories" target="_blank" rel="noopener noreferrer">
              <span style={{ backgroundColor: '#74e3a4', top: '20px' }}>Git</span><span style={{ backgroundColor: '#d6a12e' }}>hub</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
