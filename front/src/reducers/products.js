import { types } from "../types"
//Example-state
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
        "numReviews": 12
    },
]
*/
const initState = []

export const productsReducer = (state = initState, action) => {
    switch ( action.type ) {

        case types.addAllProducts:
            
            return action.payload.sort((itm1, itm2) => itm2.rating - itm1.rating);
    
        default:
            return state
    }
}