import React from 'react'
import PropTypes from 'prop-types'
import { IconSubstract } from '../icons/IconSubstract'
import { IconAdd } from '../icons/IconAdd'

import { useCart } from '../../hooks/useCart'
import './EditableNumberItem.css'

export const EditableNumberItem = ( item )=> {
    const { addItemToCart, deleteItemToCart } = useCart( item );
    
    return (
        <div className="__wrapper_buttons_items_editable">
            <button onClick={ deleteItemToCart }>
                <IconSubstract />
            </button>
            <p>
                { item.productsSelected }
            </p>
            <button
                disabled={ item.productsSelected >= item.countInStock }
                onClick={ addItemToCart}>
                    <IconAdd />
            </button>
            
        </div>
    )
}

EditableNumberItem.propTypes = {
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


