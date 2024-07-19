import React from 'react';
import '../css/footer.css';

const Footer = ({
  buttonComponents = []
}) => {
  return (
    <div className="footerContainer">
      <div className="credit-container">
        <div className="left-credit">
          <ul className="button-list">
            {buttonComponents.slice(0, 1).map((buttonComponent, index) => (
              <li key={index}>{buttonComponent}</li>
            ))}
          </ul>
        </div>
        <div className="center-credit">
          <ul className="button-list">
            {buttonComponents.slice(1, 2).map((buttonComponent, index) => (
              <li key={index}>{buttonComponent}</li>
            ))}
          </ul>
        </div>
        <div className="right-credit">
          <ul className="button-list">
            {buttonComponents.slice(2).map((buttonComponent, index) => (
              <li key={index}>{buttonComponent}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
