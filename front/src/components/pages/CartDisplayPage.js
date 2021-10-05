import React from 'react'
import { useSelector } from 'react-redux'
import { ItemCart } from '../listCart/ItemCart'
import { Payment } from '../listProducts/Payment'
import { WrapperFeed } from '../listProducts/WrapperFeed'
import { NavBar } from '../NabBar/NavBar'

export const CartDisplayPage = () => {
    const { cartReducer } = useSelector(state => state)
    return (
        <>
            <NavBar title="My Cart" />
            <main>
                <WrapperFeed>
                    {
                        (cartReducer.length > 0) 
                            ? cartReducer.map( item => <ItemCart key={`item-cart-${item._id}`} {...item} />)
                            :<p>The cart is empty</p>
                    }
                </WrapperFeed>
                {
                    
                    (cartReducer.length > 0)  && <Payment />
                }
                
            </main>
            
        </>
    )
}
