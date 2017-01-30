const React = require('react')
const { defineUrl } = require('../utils/utilities')

const Header = (props) => {
    return (
        <header className="page-header">
            <img src={defineUrl("images/eldorado/mancha-amarela.png")} className="top-yellow" />
            <img src={defineUrl("images/eldorado/logo-branco.png")} className="top-logo" />
            <div className="triangle-container">
                <div className="triangular-bottom"></div>
            </div>
        </header>
    )
}

module.exports = Header