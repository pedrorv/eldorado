const React = require('react')

const Main = (props) => {
    return (
        <div>
            <p>Main Component</p>
            {props.children}
        </div>
    )
}

module.exports = Main