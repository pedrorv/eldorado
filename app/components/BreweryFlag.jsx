const React = require('react')
const { defineUrl } = require('../utils/utilities')

const BreweryFlag = (props) => {
  const { breweryImageSrc, breweryName } = props

  return (
    <div className="flexbox brewery-flag">
        <div className="flex-image-wrapper">
            <img src={defineUrl(breweryImageSrc)} 
                  alt={breweryName + " Logo"}
                  className="beer-logo opacity-animation" />
            <h3>Cervejaria<br/>{breweryName}</h3>
        </div>
        <div className="triangle-container adjust-top">
            <div className="triangular-right"></div>
        </div>
    </div>
  )
}

module.exports = BreweryFlag