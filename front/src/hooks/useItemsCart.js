import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


export const useItemsCart = () => {
    const [ totalItems, setTotalItems ] = useState(0)
    const [ totalPrice, setTotalPrice ] = useState(0)
    const { cartReducer } = useSelector(state => state)
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

    return [ totalItems, totalPrice ]
}
