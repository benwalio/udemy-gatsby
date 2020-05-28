import React from "react";
import {
  CallToActionText,
  CallToActionWrapper,
  CallToActionContent,
  CallToActionTitle,
} from "../styles/styledTest";

function CallToAction(props) {
  return (
    <CallToActionWrapper>
      <CallToActionText>
        <CallToActionTitle render={props.title} />
        <CallToActionContent render={props.content} />
      </CallToActionText>
      <img src={props.img.url} alt={props.img.alt} />
    </CallToActionWrapper>
  );
}

export default CallToAction;
