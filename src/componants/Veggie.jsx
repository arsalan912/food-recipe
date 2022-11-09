import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { BsFillStarFill } from "react-icons/bs";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  async function getVeggie() {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  }

  useEffect(() => {
    getVeggie();
  }, []);
  return (
    <div>
      <Wrapper>
        <h3>Vegiterian picks</h3>
        <Splide
          options={{
            autoWidth: true,
            autoHeight: true,
            arrows: false,
            pagination: false,
            drag: "free",
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <div className="tag-veggie">
                      <p>{recipe.title}</p>
                    </div>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                    <div className="health">
                      <span>Health Score</span>
                      <BsFillStarFill />
                      {recipe.healthScore}
                    </div>
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  margin: 4rem 0;
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 1rem 0;
    padding: 0rem 0rem 0rem 1rem;
  }
`;

const Card = styled.div`
  width: 15rem;
  height: 20rem;
  overflow: hidden;
  margin-right: 1rem;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .tag-veggie {
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      height: 40%;
      padding: 1rem;
      color: white;
      display: flex;
      font-size: 1rem;
      justify-content: center;
      align-items: center;
      width: 14rem;
    }
  }
  .health {
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;
    padding: 0.5rem;
    font-size: 0.8rem;
    background-color: green;
    color: white;
    z-index: 15;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin: 0 0.4rem;
    }
  }
  @media screen and (max-width: 700px) {
    width: 12rem;
    height: 17rem;

    border-radius: 2rem;
    img {
      border-radius: 2rem;
    }
    .tag-veggie {
      height: 50%;
      p {
        padding: 0 1rem;
      }
    }
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  :hover {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
  }
`;

export default Veggie;
