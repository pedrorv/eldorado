const React = require('react')
const { defineUrl } = require('../utils/utilities')

const BrewerySection = (props) => {
  const { breweryImgSrc, breweryName, 
          breweryDescription, breweryLink, beerImgSrc } = props

  return (
    <div className="flexbox beer">
        <div className="flexbox beer-info">
            <div className="flex-image-wrapper">
                <img src={defineUrl(breweryImgSrc)} 
                      alt={breweryName + " Logo"}
                      className="beer-logo" />
            </div>
            <h2 className="brewery-name">Cervejaria<br/>{breweryName}</h2>
            <p className="brewery-description">
                {breweryDescription}
            </p>
        </div>
        <div className="flexbox beer-image">
            <div className="flex-image-wrapper">
                <img src={defineUrl(beerImgSrc)} 
                      alt={breweryName + " garrafa"}
                      className="beer-bottle" />
            </div>
        </div>
        <div className="flexbox">
            <a href={breweryLink} className="beer-link">saiba mais no site da {breweryName}</a>
        </div>
    </div>
  )
}

module.exports = BrewerySection