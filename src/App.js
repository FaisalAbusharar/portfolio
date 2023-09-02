import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file
import background from "./images/second.png";

function App() {
  const [showIcons, setShowIcons] = useState(false);

  // Use useEffect to trigger the animation when the component mounts
  useEffect(() => {
    // Add a slight delay to give the page time to render
    setTimeout(() => {
      setShowIcons(true);
    }, 500); // Adjust the delay time as needed
  }, []);

  return (
    <body>
      <img id="img" src={background} alt="background"></img>
      <div id="min-div">
        <h1 id="title-name" className={showIcons ? 'move-up' : ''}>
          FAISAL ANAS
        </h1>
        {showIcons && (
          <div className="social-icons">
            {/* Replace the logos with hyperlinks */}
            <a href="https://github.com/VoidyCD?tab=repositories" target="_blank" rel="noopener noreferrer">My Github</a>
            <a href="https://www.youtube.com/channel/UC4ZEJ6S7L__oWlt5v5jiFMg" target="_blank" rel="noopener noreferrer">My Youtube</a>
          </div>
        )}
      </div>
    </body>
  );
}

export default App;
