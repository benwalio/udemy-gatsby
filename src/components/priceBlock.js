import React from 'react'
import { PriceBlockWrapper, PricingTitle, SectionContent } from '../styles/styledTest'

function PriceBlock(props) {
    return (
        <PriceBlockWrapper tag={props.tag}>
            {props.tag === 'most popular' && <div className='tag popular'>most popular!</div>}
            {props.tag === 'most scalable' && <div className='tag scalable'>most scalable!</div>}
            <PricingTitle render={props.title} />
            <div className='price'>${props.price}<span className='duration'>/ month</span></div>
            <SectionContent className='description' render={props.description} />
        </PriceBlockWrapper>
    )
}

export default PriceBlock
