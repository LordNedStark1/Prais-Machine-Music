import React from 'react'

const WorshipSongCard = ({topImage, h3Text, pTagText}) => {
  return (
    <div className="worship-songs-cards">
          <div className="worship-song-card">
            <img className='worship-card-image' src={topImage} alt=''/>
            <h3>{h3Text}</h3>
            <p>{pTagText}</p>
          </div>
        </div>
  )
}

export default WorshipSongCard
