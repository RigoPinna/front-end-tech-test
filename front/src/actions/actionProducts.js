import { fetchNormal } from "../services/fetchNormal"
import { types } from "../types";
import { setLoading } from "./actionUi";

export const getProducts = () => {
    return async ( dispatch ) => {
        try {
            const resp = await fetchNormal( '/products' )
            dispatch( setLoading( false ) )
            dispatch({
                type: types.addAllProducts,
                payload: [...resp],
            })
        } catch (error) {
            console.log(error)
        }
    }
}