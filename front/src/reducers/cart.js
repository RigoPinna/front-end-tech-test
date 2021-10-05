import { types } from "../types";
//EXAMPLE STATE
/*
[
    {
        "_id": "1",
        "name": "Airpods Wireless Bluetooth Headphones",
        "image": "/images/airpods.jpg",
        "description": "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
        "brand": "Apple",
        "category": "Electronics",
        "price": 89.99,
        "countInStock": 10,
        "rating": 4.5,
        "numReviews": 12,
        "productsSelected":1 <- Número de items seleccionados de un producto
    },
]
*/
const initState = [];
export const cartReducer = (state = initState, { type, payload }) => {
    switch ( type ) {
        case types.addSavedCart:
            return payload
        case types.addProduct:
            //Se verifica si el producto ya ha sido seleccionado
            const existInCart = state.some(( {_id} ) => _id === payload._id)
            if( existInCart ) {
                //Si ha sido seleccionado se le suma +1
                const cartData = state.map( item => {
                    return (
                        (item._id === payload._id) 
                            ? { ...item, productsSelected: item.productsSelected+1 <= item.countInStock ? ++item.productsSelected :  item.productsSelected }
                            : item
                    )
                })
                localStorage.setItem('cartData',JSON.stringify( cartData ))
                return cartData;
            } else {
                //Si el producto no existe en el carrito, se agrega por primera vez con "productsSelected":1
                const cartData = [...state, payload ]
                localStorage.setItem('cartData',JSON.stringify( cartData ))
                return cartData
            }
        case types.deleteProduct:
            //Se resta -1 al producto seleccionado
            const products = state.map(( item ) =>{
                return (
                    (item._id === payload ) 
                        ? {...item, productsSelected: --item.productsSelected, }
                        : item
                    )
            })
            //Se eliminana los productos con productsSelected 0
            const cartData = products.filter( item => item.productsSelected > 0 )
            localStorage.setItem('cartData',JSON.stringify( cartData ))
            return cartData
    
        default:
            return state;
    }
}