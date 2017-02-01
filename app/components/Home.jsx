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
            </section>
            <div className="triangle-container">
                <div className="triangular-bottom"></div>
            </div>
            <section className="about">
                <div className="flex-image-wrapper">
                    <img src={defineUrl('images/eldorado/conheca-el-dorado.png')} 
                         alt="Conheça El Dorado"
                         className="about-image" />
                    <p>O evento cervejeiro<br/>
                       que une diversão<br/>
                       com conhecimento</p>
                </div>
                <div className="flex-image-wrapper">
                    <img src={defineUrl('images/eldorado/caveira-ed.png')} 
                         alt="Caveira Ed"
                         className="mascot-image" />
                </div>
                <p className="event-text">"Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor in-
cididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi
ut..."</p>
            </section>
            <div className="triangle-container">
                <div className="triangular-right"></div>
            </div>
            <section className="teasers">
                <div className="flex-image-wrapper">
                    <img src={defineUrl('images/eldorado/teasers.png')} 
                         alt="Teasers"
                         className="teasers" />
                </div>
                <div className="flexbox">
                    <div className="flex-image-wrapper">
                        <img src={defineUrl('images/outros/chopp-e-cerveja-6.jpg')} 
                                alt="Teasers"
                                className="teaser-image" />
                        <div className="image-description">
                            <p>
                                O Brasil e a Cerveja: Mercado atual - El Dorado Evento Cervejeiro
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flexbox">
                    <div className="flex-image-wrapper">
                        <img src={defineUrl('images/outros/cerveja_hocus_pocus.jpg')} 
                            alt="Teasers"
                            className="teaser-image" />
                        <div className="image-description">
                            <p>
                                Cerveja é experiência - El Dorado Evento Cervejeiro
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flexbox">
                    <h3>veja mais em nosso canal no YouTube</h3>
                </div>
            </section>
        </div>
    )
}

module.exports = Home