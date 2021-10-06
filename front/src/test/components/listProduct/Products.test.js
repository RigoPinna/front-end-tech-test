import React from 'react'
import { mount } from 'enzyme'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'

import '@testing-library/jest-dom'
import { Router } from "react-router"
import { Products } from '../../../components/listProducts/Products'

const middlewares = [ thunk]
const mockStore = configureStore(middlewares)
const productsReducer = [ 
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
        {
            "_id": "6",
            "name": "Amazon Echo Dot 3rd Generation",
            "image": "/images/alexa.jpg",
            "description": "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
            "brand": "Amazon",
            "category": "Electronics",
            "price": 29.99,
            "countInStock": 0,
            "rating": 4,
            "numReviews": 12
        }
]
const cartReducer = []
let store = mockStore({ productsReducer, cartReducer })
const wrapper = mount(
    <Provider store={store}>
        <Products />
    </Provider>
)

describe("Prueba en el componente <Products />",()=> {
    test('Debe de mostrar la lista de productos correctamente', () => {
        expect( wrapper).toMatchSnapshot()
        const title = wrapper.find('h2').text()
        expect( title ).toBe(`Fount ${productsReducer.length} Resoults`)
    })
    test('Debe de mostrar el letrero "No Productos Founts" si no hay productos', () => {
        let store = mockStore({ productsReducer:[], cartReducer })
        const wrapper = mount(
            <Provider store={ store }>
                <Products />
            </Provider>
        )
        expect( wrapper).toMatchSnapshot()
        const title = wrapper.find('h2').text()
        expect( title ).toBe('No Productos Founts')
    })
    afterEach(() => {
        store = mockStore({ productsReducer, cartReducer });
        jest.clearAllMocks();
    })
    
})