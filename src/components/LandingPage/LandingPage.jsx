
import React from 'react'
import './LandingPage.css'
import {ILiveInYou, faceBookIcon, whatsAppIcon, youtubeIcon, linkedInIcon} from './landingPageImages'
import WorshipSongCard from '../ReusableComponents/WorshipSongCard'
import { useState } from 'react'

const LandingPage = () => {
  const [emailObj , setEmailObject] = useState({
    "firstName": "",
    "lastName": "",
    "email": "",
    "subject": "",
    "message": ""
  })
  const handleEmailChange = (e)=>{
    setEmailObject({...emailObj, [e.target.name]: e.target.value})
  }
  const onEmailSubmit =(e)=>{
    e.preventDefault()
    console.log(emailObj);
    

  }

  return (
    <div className='main-container'>
        <div className='nav-bar'>nav bar</div>
      <div className='header'>
        <div className='header-image'></div>
        <div className="middle-bubble"></div>
        <div className='header-text-div'>
          <h1>Praise Machine Music</h1>
          <p>Call to action</p>
          <button>Play Now</button>
        </div>
      </div>
      <div className='new-release'>actual song</div>
      <div className='about-praise-machine'>about the musician</div>
      <div className='other-songs'>
        <div className="other-songs-h2-div">
          <h2>Discover the presence of God in worship</h2>
        </div>
        <div className='worship-song-card-container'>
          <WorshipSongCard topImage={ILiveInYou} h3Text={"Song Title"} pTagText={"experience the power and presence of good as praise machine leads in worship touching the heart heart of God"}/>
          <WorshipSongCard topImage={ILiveInYou} h3Text={"Song Title"} pTagText={"experience the power and presence of good as praise machine leads in worship touching the heart heart of God"}/>
          <WorshipSongCard topImage={ILiveInYou} h3Text={"Song Title"} pTagText={"experience the power and presence of good as praise machine leads in worship touching the heart heart of God"}/>
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
          name='message'
          cols={30}
          rows={5}
          ></textarea>

          <button type='submit'>
          {/* <a href="mailto:`{email}`?subject={subject}&body={body}">Click to Send an Email</a> */}
          Submit</button>
        </form>
        </div>
        
        <div className='other-contact-links'>
          
          <ul>
          <div className='orange-circle'>
            <li>
              <a href="https://www.google.com/"><button className='icon-image-button'><img className='icon-image' src={linkedInIcon} alt=''/><p>Visit linked in</p></button></a>
            </li>
            </div>
            <li>
              <a href="https://www.google.com/"><button className='icon-image-button'><img className='icon-image' src={linkedInIcon} alt=''/><p>Visit linked in</p></button></a>
             </li>
          <div className='orange-circle'>
            <li>
              <a href="https://www.google.com/"><button className='icon-image-button'><img className='icon-image' src={linkedInIcon} alt=''/><p>Visit linked in</p></button></a>
            </li>
          </div>
            <li>
              <a href="https://www.google.com/"><button className='icon-image-button'><img className='icon-image' src={linkedInIcon} alt=''/><p>Visit linked in</p></button></a>
            </li>
          </ul>
          <div className='orange-circle'></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
