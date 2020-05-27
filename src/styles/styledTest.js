import styled from "styled-components";

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

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
