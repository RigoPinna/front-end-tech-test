import '@testing-library/jest-dom'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { setLoading, setSimplAlert } from '../../actions/actionUi'
import { types } from '../../types'

const middlewares = [ thunk]
const mockStore = configureStore(middlewares)

const initState = []
let store = mockStore( initState )
describe('Pruebas en el reducer Ui',() => {
    beforeEach(() => {
        store = mockStore( initState )
    })
    test('Debe de mostrar la alerta simple', () => {

        store.dispatch( setSimplAlert( true ) )

        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:types.simpleAlert,
            payload: true
        })
    }) 
    test('Debe de ocultar la alerta simple', () => {

        store.dispatch( setSimplAlert( false ) )
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:types.simpleAlert,
            payload: false
        })
    }) 
    
})