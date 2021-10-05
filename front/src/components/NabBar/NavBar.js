import React from 'react'
import PropTypes from 'prop-types'

import { ButtonCart } from '../buttonShopingCart/ButtonCart'
import { ButtonBack } from '../buttonBack/ButtonBack'

import './NavBar.css'

export const NavBar = ({ title }) => {
 

    return (
    <header>
        <nav className='__navbar'>
            <ul>
                <li>
                   <ButtonBack />
                </li>
                <li>
                    <h1>{title}</h1>
                </li>
                <li>
                   <ButtonCart />
                </li>
            </ul>
        </nav>
    </header>
        
    )
}
NavBar.propTypes = {
    title: PropTypes.string.isRequired,

}
