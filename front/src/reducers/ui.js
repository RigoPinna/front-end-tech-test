import { types } from "../types"

const initState = {
    loadingPage: true,
    simpleAlert: false,
}

export const uiReducer = ( state= initState, action ) => {
    switch ( action.type ) {
        case types.loadingPage:
            
            return { ...state, loadingPage:action.payload }
        case types.simpleAlert:
            return { ...state, simpleAlert:action.payload }
    
        default:
            return state
    }
} 