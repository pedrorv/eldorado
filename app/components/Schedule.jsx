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
                             alt="2Cabeças Logo"
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
                        <img src={defineUrl('images/outros/2cabecas_logo.png')} 
                             alt="2Cabeças Logo"
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
                             alt="2Cabeças Logo"
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
                             alt="2Cabeças Logo"
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
                        <img src={defineUrl('images/outros/maracujipa.png')} 
                             alt="2Cabeças Logo"
                             className="beer-bottle" />
                    </div>
                </div>
                <div className="flexbox">
                    <a href="#" className="beer-link">saiba mais no site da Hocus Pocus</a>
                </div>
            </div>
        </div>
    )
}

module.exports = Schedule