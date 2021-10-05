import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addItem, deleteItem, resetCart } from '../actions/actionCart';
import { setSimplAlert } from '../actions/actionUi';
export const useCart = ( item={} ) => {
    
    const dispatch = useDispatch()
    const { cartReducer } = useSelector(state => state)
    const [ totalItems, setTotalItems ] = useState(0)
    const [ totalPrice, setTotalPrice ] = useState(0)

    useEffect(() => {
        let items = 0
        let totalPrice = 0
        cartReducer.forEach(item => {
            items+= +item.productsSelected
            totalPrice+= (item.price * items)

        })
        setTotalItems( items )
        setTotalPrice( totalPrice.toFixed(2) )
    }, [cartReducer])

    const addItemToCart = e => {
        e.stopPropagation()
        dispatch( addItem( item ))
        dispatch( setSimplAlert( true ))
    }

    const deleteItemToCart = () => {
        dispatch( deleteItem( item ))
    }

    const deleteAllItems = () => dispatch( resetCart() )



    return  { addItemToCart, deleteItemToCart, deleteAllItems, totalItems, totalPrice } 
}
