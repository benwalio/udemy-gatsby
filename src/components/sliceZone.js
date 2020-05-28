import React from 'react'
import Hero from './hero'
import CallToActionGrid from './callToActionGrid'
import PricingGrid from './pricingGrid'


function sliceZone(props) {
    const body = props.body;
    console.log(body)
    return (
        <>
            {body.map((bodyContent, idx) => {
                if (bodyContent.type === 'hero') {
                    return <Hero key={idx} title={bodyContent.primary.hero_title} content={bodyContent.primary.hero_content} img={bodyContent.primary.hero_image.url} />
                } else if (bodyContent.type === 'call_to_action_grid') {
                    return <CallToActionGrid key={idx} title={bodyContent.primary.section_title} actions={bodyContent.fields} />
                } else if (bodyContent.type === 'pricing') {
                    return <PricingGrid key={idx} title={bodyContent.primary.price_list_title} priceBlocks={bodyContent.fields} />
                } else {
                    return null
                }
            })}
        </>
    )
}

export default sliceZone

