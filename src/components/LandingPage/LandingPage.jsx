
import React, { useEffect, useRef } from 'react'
import './LandingPage.css'
import {ILiveInYou, nextLevel, rainbowKabiyesi, PraiseMAchineMusicLogo, faceBookIcon, whatsAppIcon, youtubeIcon, linkedInIcon, manOfWar} from './landingPageImages'
import WorshipSongCard from '../ReusableComponents/WorshipSongCard'
import { useState } from 'react'

import lottie from 'lottie-web';

const LandingPage = () => {
  const [emailObj , setEmailObject] = useState({
    "firstName": "",
    "lastName": "",
    "email": "",
    "subject": "",
    "message": ""
  })
  let container = useRef(null)
  let masterYodaAnimation = null;
  let airplaneAnimation = null;

  // useEffect(() => {
  //   masterYodaAnimation = lottie.loadAnimation({
  //         container: container.current,
  //         renderer: 'svg',
  //         loop: true,
  //         autoplay: true,
  //         animationData: masterYoda,
  //     });
  //     return () => {
  //       masterYodaAnimation.destroy();
  //     };
  // }, []);
  const handleEmailChange = (e)=>{
    setEmailObject({...emailObj, [e.target.name]: e.target.value})
  }
  const onEmailSubmit =(e)=>{
    e.preventDefault()
    console.log(emailObj);
    

  }

  return (
    <div className='main-container'>
        <div className='nav-bar'>
          nav bar
          </div>
      <div className='header'>
        <div className='header-image'></div>
        <div className="middle-bubble"></div>
        <div className='header-text-div'>
          <h1>PraiseMachineMusic</h1>
          <p>Call to action</p>
          <button className='play-now-button'> Play Now</button>
        </div>
      </div>
      <div className='new-release'>
        <img src={rainbowKabiyesi} alt=''/>
        <div className='about-new-release'>
          <h2>Ka bi yesi</h2>
          <h4>By PraiseMachineMusic</h4>
          <p>Experience the power and presence of God as praise machine leads in worship touching the heart heart of God</p>
          <button className='play-now-button'>Play Now</button>
        </div>
      </div>
      <div className='about-praise-machine'>about the musician</div>
      <div className='other-songs'>
        <div className="other-songs-h2-div">
          <h2>Discover the presence of God in worship</h2>
        </div>
        <div className='worship-song-card-container'>
          <WorshipSongCard topImage={ILiveInYou} h3Text={"Song Title"} pTagText={"experience the power and presence of God as praise machine leads in worship touching the heart heart of God"}/>
          <WorshipSongCard topImage={nextLevel} h3Text={"Song Title"} pTagText={"experience the power and presence of God as praise machine leads in worship touching the heart heart of God"}/>
          <WorshipSongCard topImage={manOfWar} h3Text={"Song Title"} pTagText={"experience the power and presence of God as praise machine leads in worship touching the heart heart of God"}/>
        </div>
     </div>
      <div className='contact-info'>
        <div className="form-div">
        <form onSubmit={onEmailSubmit}>
          <input 
          type='text'
          placeholder='First Name'
          value={emailObj.firstName}
          name='firstName'
          onChange={handleEmailChange}
          />
          <input 
          type='text'
          placeholder='Last Name'
          value={emailObj.lastName}
          name='lastName'
          onChange={handleEmailChange}
          />
          <input 
          type='email'
          placeholder='email'
          value={emailObj.email}
          name='email'
          onChange={handleEmailChange}
          />
          <input 
          type='text'
          placeholder='subject'
          value={emailObj.subject}
          name='subject'
          onChange={handleEmailChange}
          />
          <textarea 
          className='message-text-area'
          name='message'
          cols={62}
          rows={4}
          ></textarea>
          <br/>

          <button className='submit-button' type='submit'>
          {/* <a href="mailto:`{email}`?subject={subject}&body={body}">Click to Send an Email</a> */}
          Submit</button>
        </form>
        </div>
        
        <div className='other-contact-links'>
          <p> Visist my social media handles to connect with me. be a part of the experience, share your testimonies about what God has done in your life. Link up via</p>
          <ul>
            <li>
              <a href="https://www.google.com/"><button className='icon-image-button'><img className='icon-image' src={linkedInIcon} alt=''/><p>Visit linked in</p></button></a>
            </li>
            <li>
              <a href="https://www.google.com/"><button className='icon-image-button'><img className='icon-image' src={faceBookIcon} alt=''/><p>find me on facebook </p></button></a>
             </li>
            <li>
              <a href="https://www.google.com/"><button className='icon-image-button'><img className='icon-image' src={whatsAppIcon} alt=''/><p className='icon-ptag'> chat me on whats app</p></button></a>
            </li>
            <li>
              <a href="https://www.google.com/"><button className='icon-image-button'><img className='icon-image' src={youtubeIcon} alt=''/><p>subscribe to my youtube</p></button></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
