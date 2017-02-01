const React = require('react')
const { defineUrl } = require('../utils/utilities')

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
            <div className="flexbox beer">
                <div className="flexbox beer-info">
                    <div className="flex-image-wrapper">
                        <img src={defineUrl('images/outros/2cabecas_logo.png')} 
                             alt="2Cabeças Logo"
                             className="beer-logo" />
                    </div>
                    <h2 className="brewery-name">Cervejaria<br/>2Cabeças</h2>
                    <p className="brewery-description">
                        Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut
                        labore et dolore magna
                    </p>
                </div>
                <div className="flexbox beer-image">
                    <div className="flex-image-wrapper">
                        <img src={defineUrl('images/outros/maracujipa.png')} 
                             alt="2Cabeças garrafa"
                             className="beer-bottle" />
                    </div>
                </div>
                <div className="flexbox">
                    <a href="#" className="beer-link">saiba mais no site da 2Cabeças</a>
                </div>
            </div>
            <div className="flexbox beer">
                <div className="flexbox beer-info">
                    <div className="flex-image-wrapper">
                        <img src={defineUrl('images/outros/bohemia_logo.png')} 
                             alt="Bohemia Logo"
                             className="beer-logo" />
                    </div>
                    <h2 className="brewery-name">Cervejaria<br/>Bohemia</h2>
                    <p className="brewery-description">
                        Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut
                        labore et dolore magna
                    </p>
                </div>
                <div className="flexbox beer-image">
                    <div className="flex-image-wrapper">
                        <img src={defineUrl('images/outros/bohemia_ipa.png')} 
                             alt="Bohemia garrafa"
                             className="beer-bottle" />
                    </div>
                </div>
                <div className="flexbox">
                    <a href="#" className="beer-link">saiba mais no site da Bohemia</a>
                </div>
            </div>
            <div className="flexbox beer">
                <div className="flexbox beer-info">
                    <div className="flex-image-wrapper">
                        <img src={defineUrl('images/outros/hocus_pocus_logo.png')} 
                             alt="Hocus Pocus Logo"
                             className="beer-logo" />
                    </div>
                    <h2 className="brewery-name">Cervejaria<br/>Hocus Pocus</h2>
                    <p className="brewery-description">
                        Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut
                        labore et dolore magna
                    </p>
                </div>
                <div className="flexbox beer-image">
                    <div className="flex-image-wrapper">
                        <img src={defineUrl('images/outros/hocus-pocus.png')} 
                             alt="Hocus Pocus garrafa"
                             className="beer-bottle" />
                    </div>
                </div>
                <div className="flexbox">
                    <a href="#" className="beer-link">saiba mais no site da Hocus Pocus</a>
                </div>
            </div>
            <div className="flexbox beer-others">
                <h2>E MAIS</h2>

                <div className="flexbox brewery-flag">
                    <div className="flex-image-wrapper">
                        <img src={defineUrl('images/outros/cacildis.jpg')} 
                             alt="Cacildis Logo"
                             className="beer-bottle" />
                        <h3>Cervejaria<br/>Cacildis</h3>
                    </div>
                    <div className="triangle-container adjust-top">
                        <div className="triangular-right"></div>
                    </div>
                </div>
                <div className="flexbox brewery-flag">
                    <div className="flex-image-wrapper">
                        <img src={defineUrl('images/outros/colorado_logo.png')} 
                             alt="Colorado Logo"
                             className="beer-bottle" />
                        <h3>Cervejaria<br/>Colorado</h3>
                    </div>
                    <div className="triangle-container adjust-top">
                        <div className="triangular-right"></div>
                    </div>
                </div>
                <div className="flexbox brewery-flag">
                    <div className="flex-image-wrapper">
                        <img src={defineUrl('images/outros/brewdog_logo.png')} 
                             alt="Brew Dog Logo"
                             className="beer-bottle" />
                        <h3>Cervejaria<br/>Brew Dog</h3>
                    </div>
                    <div className="triangle-container adjust-top">
                        <div className="triangular-right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

module.exports = Schedule