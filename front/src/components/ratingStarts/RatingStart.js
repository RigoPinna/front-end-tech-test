import React from 'react'
import './RatingStart.css'
import { Start } from './Start'
const starts =[ 1,1.5,2,2.5,3,3.5,4,4.5,5 ]
export const RatingStart = React.memo(({ _id ,rating, numReviews }) => {
    return (
        <div className='__wrapper_reviews'>
            <fieldset className='rating rating--static'>
            {
                starts.map( start => <Start key={`start-${start}-${_id}`} value={start} rating={rating}/>)
            }
            </fieldset>
            <p>({numReviews} Reviwers)</p>
        </div>
    )
})
