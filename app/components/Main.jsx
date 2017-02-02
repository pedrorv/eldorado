const React = require('react')
const { Link } = require('react-router')
const { closeMenu, opacityScrollAnimation, animateOpacity } = require('../utils/utilities')

const Header = require('Header')
const Footer = require('Footer')

const Main = React.createClass({
    componentDidMount: function() {
        animateOpacity()
        opacityScrollAnimation()
    },
    componentDidUpdate: function() {
        animateOpacity()
    },
    render: function() {
        return (
            <div>
                <Header/>
                <div className="main-holder">
                    {this.props.children}
                    <div className="menu" id="menu">
                        <Link to="/eldorado/"
                            onClick={closeMenu}>Home</Link>
                        <hr/>
                        <Link to="/eldorado/programacao"
                            onClick={closeMenu}>Programação</Link>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
})

module.exports = Main