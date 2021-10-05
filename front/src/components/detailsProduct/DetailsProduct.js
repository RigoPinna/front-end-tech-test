import React from 'react'
import { baseURL } from '../../API'
import { EditableNumberItem } from '../editableNumberItem/EditableNumberItem'
import { RatingStart } from '../ratingStarts/RatingStart'
import { useHistory } from 'react-router-dom'
import './DetailsProduct.css'
export const DetailsProduct = ( item ) => {
    const history = useHistory();
    const hanldeGoCartPage = e => {
        history.push('/cart')
    }
    return (
        <div className='__wrapper_details_product'>
            <img src={`${baseURL}${item.image}`} alt={item.name} />
            <div className='__wrapper_details_product_body'>
                <div>
                    <h4>{item.name}</h4>
                    <p>{item.brand}</p>
                </div>
               <RatingStart {...item}/>
            </div>
            <p>{item.description}</p>
            <div className='__wrapper_details_product_footer'>
                <strong>${item.price}</strong>
                <EditableNumberItem {...item} productsSelected={1} />
                <button onClick={hanldeGoCartPage}>Cart</button>
            </div>
        </div>
    )
}
