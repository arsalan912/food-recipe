import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiCroissant } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Category() {
  return (
    <List>
      <Slink to={"/couisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={"/couisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={"/couisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={"/couisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Slink>
      <Slink to={"/couisine/French"}>
        <GiCroissant />
        <h4>ّFrench</h4>
      </Slink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 2rem 0 0 0;
  padding: 0 0 1rem 0;
  @media screen and (max-width: 550px) {
    gap: 20px;
  }
`;

const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 5rem;
  height: 5rem;
  cursor: pointer;

  h4 {
    color: white;
    font-size: 0.7rem;
  }
  svg {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
  @media screen and (max-width: 550px) {
    margin-right: 0;
    width: 70px;
    height: 40px;
    border-radius: 17px;
    h4 {
    }
    svg {
      display: none;
    }
  }
`;

export default Category;
