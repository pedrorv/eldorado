const React = require('react')

const Header = (props) => {
    return (
        <header className="page-header">
            <img src="../images/eldorado/mancha-amarela.png" className="top-yellow" />
            <img src="../images/eldorado/logo-branco.png" className="top-logo" />
            <div className="triangular-bottom"></div>
        </header>
    )
}

module.exports = Header