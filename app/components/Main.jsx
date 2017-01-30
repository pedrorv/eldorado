const React = require('react')

const Header = require('Header')
const Footer = require('Footer')

const Main = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

module.exports = Main