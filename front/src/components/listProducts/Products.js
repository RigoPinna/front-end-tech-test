import React from 'react'
import { useSelector } from 'react-redux'
import { WrapperFeed } from './WrapperFeed'
import { ItemProduct } from './ItemProduct'

export const Products = () => {

    const { productsReducer } = useSelector(state => state)
    return (
        <>
            <WrapperFeed>
                {
                    (productsReducer.length > 0) 
                        ? <h2>Fount {productsReducer.length} Resoults</h2>
                        : <h2>No Productos Founts</h2>
                }
                {
                    (productsReducer.length > 0) 
                        && productsReducer.map( product => <ItemProduct key={`product-list-${product._id}`} {...product}/> )
                }
            </WrapperFeed>
        </>
    )
}
