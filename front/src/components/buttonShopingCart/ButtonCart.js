import React from 'react'

import { useHistory } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'

import { Badge } from '../Badge/Badge'
import { IconShopingCart } from '../icons/IconShopingCart'

import './ButtonCart.css'

export const ButtonCart = () => {
    const history = useHistory()
    const { totalItems } = useCart()
    const hanldeGoCartPage = e => {
        history.push('/cart')
    }
    return (
        <button
            onClick={ hanldeGoCartPage } 
            className='__btn_cart'>
                <IconShopingCart />
                {
                    (totalItems > 0 ) && <Badge number={totalItems} />
                }
        </button>
    )
}
