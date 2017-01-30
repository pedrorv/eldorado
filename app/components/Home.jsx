const React = require('react')
const { defineUrl } = require('../utils/utilities')

const Home = (props) => {
    return (
        <div className="page-home">
            <main className="page-banner">
                <img src={defineUrl('images/outros/2cabecas_mureta.jpg')} 
                     alt="Cervejas da cervejaria 2 Cabeças na mureta"
                     className="banner-image" />
                <img src={defineUrl('images/eldorado/programacao-composicao-tipo.png')} 
                     alt="Programação" 
                     className="schedule-highlight" />
                <div className="banner-description">
                    <h2 className="banner-title">Cervejaria 2Cabeças</h2>
                    <p className="banner-subtitle">Sabores exclusivos<br /> da fabricante carioca.</p>
                </div>
            </main>
        </div>
    )
}

module.exports = Home