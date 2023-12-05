import React, { useState, useEffect } from 'react';
// import './YourComponent.css';

const NavBar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 505);

  const redirectToKaniyesiOnAudioMack= () => {

    window.open('https://audiomack.com/praisemachinemusic-1/song/kabiyesi', '_blank'); 
  };
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 505);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  return (
    <div>
      {isSmallScreen ? (
        <h3 className="mobile-header">PraiseMachineMusic</h3>
      ) : (
        <div className='nav-bar'>
          <h3>PraiseMachineMusic</h3>
          <ul>
            <li><a href="#new-release" className='custom-link'>kabiyesi</a></li>
            <li><a href="#other-songs" className='custom-link'>Other songs</a></li>
            {/* <li><a href="#contact-info" className='custom-link'>Contact us</a></li> */}
          </ul>
          <button className='play-now-button' onClick={redirectToKaniyesiOnAudioMack}>Play Now</button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
