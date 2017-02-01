const React = require('react')
const { defineUrl } = require('../utils/utilities')

const BreweryFlag = require('BreweryFlag')
const BrewerySection = require('BrewerySection')
const TattooArtist = require('TattooArtist')
const Band = require('Band')

const Schedule = (props) => {
    return (
        <div className="page-schedule">
            <div className="flexbox schedule">
                <div className="flex-image-wrapper">
                    <img src={defineUrl('images/eldorado/programacao.png')}
                         alt="Programação" 
                         className="image-schedule" />
                </div>
            </div>
            <div className="triangle-container">
                <div className="triangular-left"></div>
            </div>
            <div className="triangle-container adjust-top">
                <div className="triangular-right"></div>
            </div>
            <div className="flexbox breweries">
                <div className="flex-image-wrapper">
                    <img src={defineUrl('images/eldorado/cervejarias.png')}
                         alt="Programção" 
                         className="image-breweries" />
                </div>
            </div>

            <BrewerySection breweryImgSrc="images/outros/2cabecas_logo.png"
                            breweryName="2Cabeças" 
                            breweryDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                            breweryLink="#"
                            beerImgSrc="images/outros/maracujipa.png" />

            <BrewerySection breweryImgSrc="images/outros/bohemia_logo.png"
                            breweryName="Bohemia" 
                            breweryDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                            breweryLink="#"
                            beerImgSrc="images/outros/bohemia_ipa.png" />

            <BrewerySection breweryImgSrc="images/outros/hocus_pocus_logo.png"
                            breweryName="Hocus Pocus" 
                            breweryDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                            breweryLink="#"
                            beerImgSrc="images/outros/hocus-pocus.png" />

            
            <div className="flexbox beer-others">
                <h2>E MAIS</h2>

                <BreweryFlag breweryImageSrc="images/outros/cacildis.jpg"
                             breweryName="Cacildis" />

                <BreweryFlag breweryImageSrc="images/outros/colorado_logo.png"
                             breweryName="Colorado" />

                <BreweryFlag breweryImageSrc="images/outros/brewdog_logo.png"
                             breweryName="Brew Dog" />
            </div>

            <div className="flexbox tattoo-artists">
                <div className="flexbox tattoo-artists-header">
                    <div className="flex-image-wrapper tattoo-header">
                        <img src={defineUrl('images/eldorado/tatuadores.png')}
                            alt="Programção" 
                            className="image-tattoo-header" />
                    </div>
                    <div className="triangle-container">
                        <div className="triangular-top-right"></div>
                    </div>
                </div>

    
                <TattooArtist artistImgSrc='images/outros/cynthia-cuevas.jpg'
                              artistName='Cynthia Cuevas' />
                
                <TattooArtist artistImgSrc='images/outros/henry-anglas.jpg'
                              artistName='Henry Anglas' />
                
                <TattooArtist artistImgSrc='images/outros/camila-rocha.jpg'
                              artistName='Camila Rocha' />
                
                <TattooArtist artistImgSrc='images/outros/nikko-hurtado.jpg'
                              artistName='Nikko Hurtado' />
            </div>

            <div className="flexbox bands">
                <div className="flexbox bands-header">
                    <div className="flex-image-wrapper bands-header">
                        <img src={defineUrl('images/eldorado/bandas.png')}
                            alt="Programção" 
                            className="image-bands-header" />
                    </div>
                    <div className="triangle-container">
                        <div className="triangular-top-right"></div>
                    </div>
                </div>

                <Band bandImgSrc='images/outros/los-fabulosos-cadillacs.jpg'
                      bandName='Los Fabulosos Cadillacs' />

                <Band bandImgSrc='images/outros/johnny-hooker.jpg'
                      bandName='Johnny Hooker' />

                <Band bandImgSrc='images/outros/fat-divers.jpg'
                      bandName='Fat Divers' />

                <Band bandImgSrc='images/outros/primos-distantes.jpg'
                      bandName='Primos Distantes' />
            </div>
        </div>
    )
}

module.exports = Schedule