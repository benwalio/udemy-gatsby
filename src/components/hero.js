import React from 'react'
import { RichText } from "prismic-reactjs";

function Hero(props) {
    return (
        <div>
            <RichText render={props.title} />
            <p>{props.content}</p>
        </div>
    )
}

export default Hero
