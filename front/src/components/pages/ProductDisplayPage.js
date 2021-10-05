import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchNormal } from '../../services/fetchNormal'
import { DetailsProduct } from '../detailsProduct/DetailsProduct'
import { NavBar } from '../NabBar/NavBar'
import { SpinnerLoader } from '../spinnerLoader/SpinnerLoader'

export const ProductDisplayPage = () => {
    const { _id:pid } = useParams()
    const [ product, setProduct ] = useState( null )
    const { productsReducer } = useSelector(state => state)
    useEffect(() => {
        let abort = new AbortController();
        ( async()=> {
            let product = productsReducer.find(({ _id }) => +_id === pid )
            product = ( !product?._id ) &&  await fetchNormal(`/products/${pid}`)  
            setProduct( product )
            abort = null

        })();
        return () => abort?.abort()
    }, [pid])
    return (
        <>
            
            <main className="__wrapper_display_page_product">
            <NavBar title=""/>
                {
                    (product === null) 
                        ? <section className='__wrapper_feed_products'><SpinnerLoader /></section>
                        : !!product ? <DetailsProduct {...product}/> : <section className='__wrapper_feed_products'>Not found</section>
                }
            </main>
        </>
    )
}
