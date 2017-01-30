const React = require('react')
const { defineUrl } = require('../utils/utilities')

const Footer = (props) => {
    return (
        <footer className="page-footer">
            <div className="footer-content">
                <img src={defineUrl('/images/eldorado/logo-preto.png')} alt="Logo do El Dorado" />
                <p>2017 - Todos os direitos reservados</p>
            </div>
        </footer>
    )
}

module.exports = Footer