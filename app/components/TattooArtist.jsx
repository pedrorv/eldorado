const React = require('react')
const { defineUrl } = require('../utils/utilities')

const TattooArtist = (props) => {
  const { artistImgSrc, artistName } = props

  return (
    <div className="flexbox tattoo-artist-section">
        <div className="flex-image-wrapper tattoo-artist">
            <img src={defineUrl(artistImgSrc)} 
                alt={artistName}
                className="tattoo-artist" />
            <h3>{artistName}</h3>
        </div>
    </div>
  )
}

module.exports = TattooArtist