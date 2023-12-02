
import React from 'react'
import './LandingPage.css'
import {ILiveInYou} from './landingPageImages'
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
        <form>
          <input 
          type='text'
          placeholder='First Name'
          />
          <input 
          type='text'
          placeholder='Last Name'
          />
          <input 
          type='email'
          placeholder='email'
          />
          <input 
          type='text'
          placeholder='subject'
          />
          <textarea/>
        </form>
        </div>
        
        <div className='other-contact-links'>
          <ul>
            <li>
              <a href="https://www.google.com/"><button>Visit google</button></a>
            </li>
            <li>
              <a href="https://www.google.com/"><button>Visit FaceBook</button></a>
            </li>
            <li>
              <a href="https://www.google.com/"><button>Visit Instagram</button></a>
            </li>
            <li>
              <a href="https://www.google.com/"><button>Visit whats app</button></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
