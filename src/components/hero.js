import React from "react";
import { RichText } from "prismic-reactjs";
import { HeroWrapper } from "../styles/styledTest";

function Hero(props) {
  return (
    <HeroWrapper img={props.img}>
      <div>
        <RichText render={props.title} />
        <p>{props.content}</p>
      </div>
    </HeroWrapper>
  );
}

export default Hero;
