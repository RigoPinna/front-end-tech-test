import '@testing-library/jest-dom'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { getProducts } from '../../actions/actionProducts'
import { types } from '../../types'

const middlewares = [ thunk]
const mockStore = configureStore(middlewares)

const initState = []
let store = mockStore( initState )
describe('Pruebas en el reducer Products',() => {
    beforeEach(() => {
        store = mockStore( initState )
    })
    test('Debe de obtener los productos del backend y cambiar el estado de Loading', async () => { 
        await store.dispatch( getProducts() )
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.loadingPage,
            payload: false
        })
        expect(actions[1]).toEqual({
            type: types.addAllProducts,
            payload: expect.any(Array)
        })
    })
})