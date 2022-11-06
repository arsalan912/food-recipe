import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);

  async function getPopular() {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  }

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>
      <Wrapper>
        <h3>Trending</h3>
        <Splide
          options={{
            autoWidth: true,
            autoHeight: true,
            arrows: false,
            pagination: false,
            drag: "free",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <div className="tag-pop">
                      <p>{recipe.title}</p>
                    </div>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
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
  .tag-pop {
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
      overflow: hidden;
    }
  }
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
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
`;

export default Popular;
