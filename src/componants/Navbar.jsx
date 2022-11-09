import { Link } from "react-router-dom";
import styled from "styled-components";
import { SiIfood } from "react-icons/si";

function Navbar() {
  return (
    <Nav>
      <LogoContainer to={"/"}>
        <Logo>
          F<SiIfood />D
        </Logo>
      </LogoContainer>
    </Nav>
  );
}
const Logo = styled.div`
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  color: #444444;
  // @media screen and (max-width: 550px) {
  //   color: white;
  // }
`;
const Nav = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3rem;

  @media screen and (max-width: 1000px) {
    padding: 2rem 1rem;
  }
  @media screen and (max-width: 550px) {
    padding: 2rem 1rem;
    font-size: 2rem;
  }
`;
const LogoContainer = styled(Link)`
  height: 4rem;
  margin-left: 2rem;
  cursor: pointer;
  display: grid;
  grid-template-column: 1fr;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30%;
  text-decoration: none;
  svg {
    color: #f7bebe;
  }
`;

export default Navbar;
