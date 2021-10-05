import React from 'react'
import PropTypes from 'prop-types'
import './Badge.css'

export const Badge = ({ number }) => {
    return (
        <span className="__badge animate__animated animate__fadeIn">
            { number }
        </span>
    )
}

Badge.propTypes = {
    number: PropTypes.number.isRequired,
}
