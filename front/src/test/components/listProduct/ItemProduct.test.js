import React from 'react'
import { mount } from 'enzyme'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'

import '@testing-library/jest-dom'
import { Router } from "react-router"
import { ItemProduct } from '../../../components/listProducts/ItemProduct'

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

let store = mockStore({cartReducer})
store.dispatch = jest.fn();
const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
 
  }

const wrapper = mount(
    <Provider store={store}>
        <Router history={historyMock}>
            <ItemProduct {...productsReducer[0]}/> 
        </Router>

    </Provider>
)
describe('Pruebas en el componente <ItemProduct />',() => {

    
    test('Debe de mostrarse correctamente',()=>{
        expect( wrapper).toMatchSnapshot()
        expect(wrapper.find('.__card').exists()).toBe(true)
    })

    test('Debe mostrar el nombre correctamente y el boton "Add to item cart" debe estar activo',()=>{
        expect(wrapper.find('h4').text()).toBe(productsReducer[0].name)
        const buttonAddtoItem = wrapper.find('button').prop('disabled').valueOf()

        expect( buttonAddtoItem ).toBe( false )
    })

    test('Debe deshabilitar el boton "Add to item cart" si el stock es menor que 1',() => {
        const wrapper = mount(
            <Provider store={store}>
                <Router history={historyMock}>
                    <ItemProduct {...productsReducer[1]} />
                </Router>
            </Provider>
        )
        expect( wrapper).toMatchSnapshot()
        const buttonAddtoItem = wrapper.find('button').prop('disabled').valueOf()

        expect( buttonAddtoItem ).toBe( true )
    })
    test('Debe de navegar a la página del producto al dar clic', () => {
        const item = wrapper.find('.__card');
        item.prop('onClick')();
        expect( historyMock.push ).toHaveBeenCalledTimes(1)
    })
    afterEach(() => {
        store = mockStore({ cartReducer });
        jest.clearAllMocks();
    })
    
})
