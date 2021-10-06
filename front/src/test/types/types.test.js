import { types } from "../../types"
import ''
describe('Prueba de archivo types',()=> {
    
    test('Los types deben ser iguales',()=> {
        const tps = {
            loadingPage: '[ui] loading page',
            simpleAlert: '[ui] simple alert',
            
            addAllProducts: '[products] Get all products',
            getProduct: '[products] get data product',
            
            addSavedCart:'[cart] added saved cart',
            addProduct: '[cart] added product to cart',
            deleteProduct: '[cart] deleted product to cart',
            resetCart: '[cart] reset product to cart'
        }
        expect( tps).toEqual(types)
    })

})