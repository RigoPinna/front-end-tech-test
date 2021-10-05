import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom'
  
  
  import { ProductDisplayPage } from './components/pages/ProductDisplayPage'
  import { ProductListPage } from './components/pages/ProductListPage'
  import { CartDisplayPage } from './components/pages/CartDisplayPage'
import { useDispatch } from 'react-redux'
import { addDataSaved } from './actions/actionCart'

export const AppRouter = () => {
    const dispatch = useDispatch()
  useEffect(() => {
   const cartData = localStorage.getItem('cartData')
   if( !!cartData ) {
     dispatch(addDataSaved( cartData ))
   }
  }, [])
    return (
        <Router>
        <Switch>
          <Route exact path="/" component={ProductListPage}/>
          <Route exact path="/product/:_id" component={ProductDisplayPage} />
          <Route exact path="/cart" component={CartDisplayPage} />
          <Redirect to={'/'} />
        </Switch>
      </Router>
    )
}
