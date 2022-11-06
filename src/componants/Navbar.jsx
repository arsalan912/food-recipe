import { Link } from "react-router-dom";
import styled from "styled-components";
import { SiIfood } from "react-icons/si";
import { BsFillSuitHeartFill } from "react-icons/bs";

function Navbar() {
  return (
    <Nav>
      <LogoContainer to={"/"}>
        <Logo>
          F<SiIfood />D
        </Logo>
      </LogoContainer>
      <Favotite to={"/fav"}>
        <span>Favorite</span>
        <BsFillSuitHeartFill />
      </Favotite>
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
const Favotite = styled(Link)`
  display: flex;
  margin-right: 2rem;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  background: white;
  padding: 1rem 1rem;
  border-radius: 2rem;
  text-decoration: none;
  color: #444444;
  cursor: pointer;
  span {
    font-family: "Lobster Two", cursive;
  }
  :hover {
    svg {
      color: #f7bebe;
    }
  }
  @media screen and (max-width: 550px) {
    font-size: 1rem;
    span {
      display: none;
    }
  }
`;

export default Navbar;
