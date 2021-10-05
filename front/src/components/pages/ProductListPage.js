import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/actionProducts'
import { Products } from '../listProducts/Products'
import { NavBar } from '../NabBar/NavBar'
import { SimpleAlert } from '../simpleAlert/SimpleAlert'
import { SpinnerLoader } from '../spinnerLoader/SpinnerLoader'

export const ProductListPage = () => {
    const { loadingPage, simpleAlert } = useSelector(state => state.uiReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch( getProducts() )
    }, [ dispatch ])
    if (loadingPage) {
        return (
            <main>
                <section className='__wrapper_feed_products'>
                    <SpinnerLoader />
                </section>
            </main>
        )
     }
    return (
        <>
            <NavBar title="Products" />
            <main>

                <Products />
                {
                    simpleAlert && <SimpleAlert />
                }
                
            </main>
        </>
    )
}
