import React from 'react'
import { useCart } from '../../hooks/useCart'

import './Payment.css'

export const Payment = () => {
    const { totalItems, totalPrice } = useCart()
    return (
        <div className="__wrapper_payment animate__animated animate__fadeIn">
            <div className='__wrapper_payment_price'>
                <strong>Bag total</strong>
                <strong><span>({ totalItems } items)</span> ${totalPrice}</strong>
            </div>
            
        </div>
    )
}
