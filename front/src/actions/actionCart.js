import { types } from "../types";
export const addDataSaved = ( cartData ) => ({
    type: types.addSavedCart,
    payload: JSON.parse( cartData ),
})
export const addItem = ( item ) => ({
    type: types.addProduct,
    payload: {...item, productsSelected:1 },
    
})
export const deleteItem = ({ _id }) => ({
    type: types.deleteProduct,
    payload: _id,
    
})
export const resetCart = () => ({
    type: types.resetCart,
})