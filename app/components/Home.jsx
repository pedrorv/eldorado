const React = require('react')
const { defineUrl } = require('../utils/utilities')
const { Link } = require('react-router')

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
                    <h2 className="banner-title">Cervejaria<br/>2Cabeças</h2>
                    <p className="banner-subtitle">Sabores exclusivos<br/>da fabricante carioca.</p>
                </div>
            </main>
            <section className="tickets">
                <div className="flex-image-wrapper">
                    <img src={defineUrl('images/eldorado/garanta-seu-ingresso-branco.png')} 
                         alt="Garanta seu ingresso"
                         className="buy-tickets" />
                </div>
                <h2 className="tickets-subtitle">Conheça nossos pacotes</h2>
                <div className="triangle-container">
                    <div className="triangular-bottom"></div>
                </div>
            </section>
        </div>
    )
}

module.exports = Home