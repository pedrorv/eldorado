const React = require('react')
const { defineUrl } = require('../utils/utilities')

const Band = (props) => {
  const { bandImgSrc, bandName } = props

  return (
    <div className="flexbox band-section">
        <div className="flex-image-wrapper band">
            <img src={defineUrl(bandImgSrc)} 
                alt={bandName}
                className="band" />
            <h3>{bandName}</h3>
        </div>
    </div>
  )
}

module.exports = Band