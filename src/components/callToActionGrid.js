import React from 'react'
import { CallToActionGridWrapper, SectionTitle } from '../styles/styledTest'
import CallToAction from './callToAction'

function CallToActionGrid(props) {
    return (
        <CallToActionGridWrapper>
            <SectionTitle render={props.title} />
            {props.actions.map((action, idx) => {
                return <CallToAction key={idx} title={action.action_title} content={action.action_content} img={action.action_image} buttonTitle={action.action_button} buttonDest={`/${action.button_destination._meta.uid}`} />
            })}
        </CallToActionGridWrapper>
    )
}

export default CallToActionGrid
