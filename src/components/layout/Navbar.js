import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({icon, title}) => {
    return (
        <nav className="navbar sticky-top navbar-dark bg-dark">
            <h4>
                <i className={icon} /> {title}
            </h4>
        </nav>
        )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Holding Title",
    icon: "fa fa-list"
}

export default Navbar
