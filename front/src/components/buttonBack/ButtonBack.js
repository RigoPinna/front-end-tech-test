import React from 'react'
import { useHistory } from 'react-router'
import { IconArowLeft } from '../icons/IconArowLeft'

export const ButtonBack = React.memo(() => {
    const history = useHistory()
    const hanldeGoBack = e => history.goBack()
    return (
        <>
            {
                (history.location.pathname !== '/' && history.length > 0) 
                    && <button onClick={hanldeGoBack}> <IconArowLeft /> </button>
            }
       </>
    )
})
