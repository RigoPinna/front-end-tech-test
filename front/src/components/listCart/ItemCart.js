import React from 'react'
import PropTypes from 'prop-types'

import { baseURL } from '../../API'
import { EditableNumberItem } from '../editableNumberItem/EditableNumberItem'

import './ItemCart.css'

export const ItemCart = ( item )=> {
    return (
        <div className="__item_cart animate__animated animate__fadeIn">
            <img src={`${baseURL}${item.image}`} alt={item.name}/>
            <div className="__item_cart_body">
                <h4>{item.name}</h4>
                <p>{item.brand}-{item.category}</p>
                <p>In Stock {item.countInStock}</p>
                <div>
                    <strong>${item.price}</strong>
                    <EditableNumberItem {...item}/>
                </div>
            </div>
        </div>
    )
}

ItemCart.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    countInStock: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    productsSelected: PropTypes.number.isRequired,
}

