import React from "react";
import {
  CallToActionText,
  CallToActionWrapper,
  CallToActionContent,
  CallToActionTitle,
  Button,
  CallToActionImage
} from "../styles/styledTest";
import { Link } from "gatsby";

function CallToAction(props) {
  return (
    <CallToActionWrapper>
      <CallToActionText>
        <CallToActionTitle render={props.title} />
        <CallToActionContent render={props.content} />
        <Button>
          <Link to={props.buttonDest}>{props.buttonTitle}</Link>
        </Button>
      </CallToActionText>
      <CallToActionImage src={props.img.url} alt={props.img.alt} />
    </CallToActionWrapper>
  );
}

export default CallToAction;
