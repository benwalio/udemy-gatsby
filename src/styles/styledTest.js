import styled from "styled-components";
import RichTextCustom from "../components/richText";

export const Main = styled.main`
  margin: 0 auto;
`;

export const HeroWrapper = styled.section`
    background-image: url('${props => props.img}');
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(100vh - 3rem);
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    
    div {
        max-width: 80vw;
        margin: 0 auto;
        color: white;
        text-shadow: 2px 2px 4px black;
    }
`

export const CallToActionGridWrapper = styled.section`
    max-width: 80vw;
    margin: 2rem auto;
`

export const PriceGridWrapper = styled.section`
    max-width: 80vw;
    margin: 2rem auto;
    >div:last-child {
        display: flex;
    }
`

export const PriceBlockWrapper = styled.div`
    flex-grow:1;
    flex-basis: 0;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.tag === 'most popular' ? 'orange' : props.tag === 'most scalable' ? 'darkturquoise' : 'lightgray'};
    color: ${props => props.tag === 'most popular' ? 'navy' : 'black'};
    padding: 1rem;
    position: relative;

    .tag {
        position: absolute;
        top: 0;
        right: 0;
        padding: .5rem;
        font-weight: bold;
    }

    .popular {
        background-color: green;
        color: white;
    }

    .scalable {
        background-color: darkblue;
        color: white;
    }

    .description {

    }

    .price {
        text-align: center;
        font-size: 3rem;
        background-color: rgba(0, 0, 0, 0.2);
        padding: 1rem;
        margin: .5rem -1rem;

        .duration {
            font-size: 1.2rem;
        }
    }
    
`

export const SectionTitle = styled(RichTextCustom)`

`

export const PricingTitle = styled(SectionTitle)`
    margin-top: 2rem;
`

export const SectionContent = styled(RichTextCustom)`

`

export const CallToActionWrapper = styled.section`
    background: lightgray;
    border-radius: 15px;
    padding: 2rem;
    margin: 2rem 0;
    display: flex;
    justify-content: center;
`

export const CallToActionText = styled.div`

`

export const CallToActionTitle = styled(RichTextCustom)`

`

export const CallToActionContent = styled(RichTextCustom)`

`

export const CallToActionImage = styled.img`
    max-width: 10rem;
    margin: 0 2rem;
    border-radius: 10px;
`

export const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
`;

export const NavLink = styled.div`
  margin: auto 0;

  a {
    color: white;
    padding: 0 0.5rem;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.8rem;

    &:hover {
      color: orange;
    }
  }
`;

export const Brand = styled.div`
  display: flex;
`;

export const BrandLink = styled(NavLink)`
  a {
    color: orange;
    font-size: 1rem;
    padding-right: 0;

    &:hover {
      color: white;
    }
  }
`;

export const BrandInk = styled.div`
  margin: auto 0;
  color: lime;
  font-size: 0.8rem;
  /* text-decoration: underline; */
  border-bottom: solid lime 1px;
  padding: 0 0.5rem;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    color: palegreen;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: black;
  height: 3rem;
  padding: 0 2rem;
  box-sizing: border-box;
`;

export const Button = styled.div`
    background-color: orange;
    display: inline-block;
    border-radius: 4px;
    cursor: pointer;
    
    a {
        color: white;
        padding: 0.5rem 1.3rem;
        text-decoration: none;
        text-shadow: 1px 1px 1px black;
    }
`

export const Form = styled.form`
    padding: 1rem;
    background-color: lightgray;
    margin-top: 2rem;
    max-width: 80vw;
    margin-left: auto;
    margin-right: auto;
`

export const FormSubmit = styled.button`
    background-color: orange;
    color: white;
    cursor: pointer;
    padding: .5rem 1.3rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: .3rem;
`
