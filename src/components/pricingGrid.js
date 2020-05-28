import React from "react";
import { SectionTitle, PriceGridWrapper } from "../styles/styledTest";
import PriceBlock from "./priceBlock";

function PricingGrid(props) {
  return (
    <PriceGridWrapper>
      <SectionTitle render={props.title} />
      <div>
        {props.priceBlocks.map((price, idx) => {
          return (
            <PriceBlock
              key={idx}
              description={price.price_description}
              price={price.price_per_month}
              tag={price.price_tags}
              title={price.price_title}
            />
          );
        })}
      </div>
    </PriceGridWrapper>
  );
}

export default PricingGrid;
