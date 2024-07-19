import React, { useState, useEffect } from 'react';
import './css/App.css'; // Import your CSS file
import './components/buttonStyles.tsx';
import StyledButton from './components/buttonStyles.tsx';
import Footer from './components/footer.jsx';
import './css/footer.css'

function App() {
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowInfo(true);
    }, 500);
  }, []);

  const handleContactClick = () => {
    window.location.href = 'mailto:voidycodes@gmail.com';
  };

  const handleProjectsClick = () => {
    window.location.href = 'https://github.com/FaisalAbusharar?tab=repositories';
  };

  const headerButtons = [
    <li key="youtube">
      <a href="https://www.youtube.com/channel/UC4ZEJ6S7L__oWlt5v5jiFMg" target="_blank" rel="noopener noreferrer">
      <StyledButton><span id='gradientButtonTextSub'>Youtube</span></StyledButton>
      </a>
    </li>,
    <li key="this-project">
      <a href="https://github.com/FaisalAbusharar/portfolio" target="_blank" rel="noopener noreferrer">
      <StyledButton><span id='gradientButtonTextSub'>This Project</span></StyledButton>
      </a>
    </li>,
    <li key="github">
      <a href="https://github.com/FaisalAbusharar" target="_blank" rel="noopener noreferrer">
        <StyledButton><span id='gradientButtonTextSub'>Github</span></StyledButton>
      </a>
    </li>,
  ];

  return (
    <div className="background-container">
      {/* <NavigationBar /> */}
      <Footer buttonComponents={headerButtons}></Footer>
      <div id="min-div">
      <h1 id="title-name" className={showInfo ? 'move-up' : ''}>
        Yo, I'm <span id="gradientSubSub">Faisal</span>
      </h1>
        <h2 id="subtitle" className={showInfo ? 'move-up' : ''}>
          <span id="gradientSub">Software Developer</span><span id="gradientGold">‎ ‎ Python , C# & Javascript</span>
        </h2>
        {showInfo && (
          <>
            <div className="button-container">
              <StyledButton onClick={handleContactClick}><span id="gradientButtonText" >Contact Me</span></StyledButton>
            </div>
            <div className="social-links"></div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
