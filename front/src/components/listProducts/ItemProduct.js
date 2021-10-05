import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { baseURL } from '../../API'

import { IconSad } from '../icons/IconSad'
import { IconAdd } from '../icons/IconAdd'

import './ItemProduct.css'
import { RatingStart } from '../ratingStarts/RatingStart'
export const ItemProduct = ( product ) => {
    const history = useHistory()
    const { addItemToCart } = useCart( product );
    return (
        <div className ='__card animate__animated animate__fadeIn' onClick={()=> history.push(`/product/${product._id}`)}>
            <span>#{product.rating}</span>
            <img src={`${baseURL}${product.image}`} alt={product.name} />
            <div className='__card_body'>
                <h4>{product.name}</h4>
                <p>{`${product.brand} - ${product.category}`}</p>
                <p className='__card_body_description'>{ product.description }</p>
                <RatingStart {...product} />
            </div>
            <div className ='__card_footer'>
                <strong>${product.price}</strong>
                <button 
                    onClick={ addItemToCart }
                    disabled={ product.countInStock < 1}>
                    {
                        (product.countInStock < 1) 
                            ? <><IconSad/>Out of stock</> 
                            : <><IconAdd />Add to item cart</>
                    }
                </button>
            </div>
        </div>
    )
}
ItemProduct.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    countInStock: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
}
