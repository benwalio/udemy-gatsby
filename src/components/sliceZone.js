import React from 'react'
import Hero from './hero'


function sliceZone(props) {
    const body = props.body;
    console.log(body)
    return (
        <>
            {body.map((bodyContent, idx) => {
                if (bodyContent.type === 'hero') {
                    return <Hero key={idx} title={bodyContent.primary.hero_title} content={bodyContent.primary.hero_content} img={bodyContent.primary.hero_image.url} />
                }
            })}
        </>
    )
}

export default sliceZone

