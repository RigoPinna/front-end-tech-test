import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from '../reducers/cart';
import { productsReducer } from '../reducers/products';
import { uiReducer } from '../reducers/ui';

const composeEnhancers = ( typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose

const reducers = combineReducers({
    uiReducer,
    productsReducer,
    cartReducer,
})
export const store = createStore( 
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
)
