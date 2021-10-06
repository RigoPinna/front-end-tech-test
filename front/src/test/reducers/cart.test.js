import { addItem, deleteItem } from "../../actions/actionCart"
import { cartReducer } from "../../reducers/cart"

describe('Pruebas en el Cart [Reducer] ', () => {
    test('Debe de retornar el estado por defect', () => {
        const initState = []
        const state = cartReducer(initState, {})
        expect( initState ).toEqual( state )
    })
    test('Debe de agregar un producto por primera vez', () => {
        const item = {
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
            "productsSelected": 1
        }
        const resultState = [ item ]
        const state = cartReducer( [], addItem( item ))
        expect( resultState ).toEqual( state )
    })
    test('Debe de aumentar el productsSelected si ya está agregado', () => {
        const item = {
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
            "productsSelected": 1
        }
        const initState = [ item ]
        const state = cartReducer( initState, addItem( item ))
        expect( state[0].productsSelected ).toBe( 2 )
    })
    test('El productsSelected del item no debe ser mayor al de su countInStock', () => {
        const stock = 10;
        const item = {
            "_id": "1",
            "name": "Airpods Wireless Bluetooth Headphones",
            "image": "/images/airpods.jpg",
            "description": "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
            "brand": "Apple",
            "category": "Electronics",
            "price": 89.99,
            "countInStock": stock,
            "rating": 4.5,
            "numReviews": 12,
            "productsSelected": 10
        }
        const initState = [ item ]
        const state = cartReducer( initState, addItem( item ))
        expect( state[0].productsSelected ).toBeLessThanOrEqual( stock )
    })
    test('Debe eliminar un producto cuando el productsSelect es mayor a 1', () => {
        const stock = 10;
        const item = {
            "_id": "1",
            "name": "Airpods Wireless Bluetooth Headphones",
            "image": "/images/airpods.jpg",
            "description": "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
            "brand": "Apple",
            "category": "Electronics",
            "price": 89.99,
            "countInStock": stock,
            "rating": 4.5,
            "numReviews": 12,
            "productsSelected": 5
        }
        const initState = [ item ]
        const state = cartReducer( initState, deleteItem( item ))
        expect( state[0].productsSelected ).toBe( 4 )
    })
    test('Debe eliminar un producto por completo si el productsSelect es menor a 1', () => {
        const stock = 10;
        const item = {
            "_id": "1",
            "name": "Airpods Wireless Bluetooth Headphones",
            "image": "/images/airpods.jpg",
            "description": "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
            "brand": "Apple",
            "category": "Electronics",
            "price": 89.99,
            "countInStock": stock,
            "rating": 4.5,
            "numReviews": 12,
            "productsSelected": 1
        }
        const initState = [ item ]
        const state = cartReducer( initState, deleteItem( item ))
        expect( state ).toEqual([])
    })
    

})