import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSimplAlert } from '../../actions/actionUi'
import './SimpleAlert.css'
export const SimpleAlert = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const idInterval = setTimeout(() => {
            dispatch( setSimplAlert( false ) )
            clearInterval( idInterval )
            
        },3000);
        return ()=> clearInterval( idInterval )
    }, [dispatch])
    return (
        <div className="__simple_alert">
            Added to Cart
        </div>
    )
}
