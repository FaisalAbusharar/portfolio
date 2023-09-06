import React, { useState, useEffect } from 'react';
import './css/App.css'; // Import your CSS file

function App() {
  const [showInfo, setShowInfo] = useState(false);

  // Use useEffect to trigger the animation when the component mounts
  useEffect(() => {
    // Add a slight delay to give the page time to render
    setTimeout(() => {
      setShowInfo(true);
    }, 500); // Adjust the delay time as needed
  }, []);

  const handleContactClick = () => {
    // Open the user's default email client with a pre-filled email
    window.location.href = 'mailto:voidycodes@gmail.com';
  };

  const handleProjectsClick = () => {
    window.location.href = 'https://github.com/VoidyCD?tab=repositories'
  }


  return (
    <div className="background-container">
      {/* <NavigationBar /> */}
      <div id="min-div">

        
        <h1 id="title-name" className={showInfo ? 'move-up' : ''}>
          Yo, I'm Faisal
        </h1>
        <h2 id="subtitle" className={showInfo ? 'move-up' : ''}>
          Software Developer in Python & C++
        </h2>

        <button onClick={handleProjectsClick} className="projects-button" >
                Projects
          </button>

        

        {showInfo && (
          <>
            <div className="button-container">
            
              <button className="contact-button" onClick={handleContactClick}>
                Contact Me
              </button>
            </div>
            <div className="social-links">
  <a
    href="https://www.youtube.com/channel/UC4ZEJ6S7L__oWlt5v5jiFMg"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className='firstPart'>You</span>
    <span className='secondPart'>tube</span>
  </a>
  <a
    href="https://github.com/VoidyCD/portfolio"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className='firstPart'>This</span>
    <span className='secondPart'>Project</span>
  </a>
  <a
    href="https://github.com/VoidyCD?tab=repositories"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className='firstPart'>Git</span>
    <span className='secondPart'>hub</span>
  </a>
</div>

          </>
        )}
      </div>
    </div>
  );
}

export default App;
