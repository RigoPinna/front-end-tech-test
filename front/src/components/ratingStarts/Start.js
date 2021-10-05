import React, { useEffect, useRef } from 'react'

export const Start = React.memo(({ value, rating }) => {
    const start = useRef(null)
    useEffect(() => {
        if( !!start.current ) {
            (value > rating) 
                && start.current.setAttribute('disabled', true);
        }
    }, [])
    return (
        <label>
            <input ref={ start } name="star" value={ value } type="radio"/>
            <span></span>
        </label>
    )
})
