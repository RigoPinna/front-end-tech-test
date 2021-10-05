import React from 'react'
import './WrapperFeed.css'
export const WrapperFeed = ({children}) => {
    return (
        <section className="__wrapper_feed_products">
            { children }
        </section>
    )
}
