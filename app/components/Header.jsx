const React = require('react')
const { defineUrl, openMenu, closeMenu } = require('../utils/utilities')

const Header = (props) => {
    return (
        <header className="page-header">
            <img src={defineUrl("images/eldorado/mancha-amarela.png")} className="top-yellow" />
            <img src={defineUrl("images/eldorado/logo-branco.png")} className="top-logo" />
            <div className="triangle-container">
                <div className="triangular-bottom"></div>
            </div>
            <img src={defineUrl('images/eldorado/menu-icon.png')} 
                 alt="Menu"
                 id="open-menu"
                 onClick={openMenu}
                 className="menu-icon" />
            <img src={defineUrl('images/eldorado/close-menu.png')} 
                 alt="Menu"
                 id="close-menu"
                 onClick={closeMenu}
                 className="menu-icon hidden" />            
        </header>
    )
}

module.exports = Header