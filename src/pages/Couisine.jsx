import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Couisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCousine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCousine(params.type);
    console.log(cuisine);
  }, [params.type]);

  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
  margin: 3rem 0rem;
  @media screen and (max-width: 550px) {
    margin: 3rem 1rem;
  }
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 0;
    object-fit: cover;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
  @media screen and (max-width: 550px) {
    img {
      width: 100%;
      border-radius: 1rem;
    }
  }
`;

export default Couisine;
