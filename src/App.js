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
      {/* <NavigationBar /> */}
      <div id="min-div">
        <h1 id="title-name" className={showInfo ? 'move-up' : ''}>
          Yo, I'm Faisal
        </h1>
        <div id="subtitle" className={showInfo ? 'move-up' : ''}>
          Software Developer IN Python / C++
        </div>
      </div>
    </div>
  );
}

export default App;

