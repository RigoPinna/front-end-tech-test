import React, { useEffect, useState } from 'react'

export const Start = React.memo(({ value, rating }) => {
    const [select, setSelect] = useState( false )
    useEffect(() => {
        (value > rating) 
            && setSelect( true )
    }, [])
    return (
        <label>
            <input disabled={ select } name="star" value={ value } type="radio"/>
            <span></span>
        </label>
    )
})
