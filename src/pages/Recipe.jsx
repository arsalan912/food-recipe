import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activetab, setActtiveTab] = useState("Instructions");
  async function fetchDetails() {
    const data = await fetch(
      `https:api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  }
  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div className="title-image">
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <ButtonContainer>
          <Button
            className={activetab === "Instructions" ? "active" : ""}
            onClick={() => setActtiveTab("Instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activetab === "ingredients" ? "active" : ""}
            onClick={() => setActtiveTab("ingredients")}
          >
            ingredients
          </Button>
        </ButtonContainer>
        {activetab === "Instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activetab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((item) => {
              return <li key={item.id}>{item.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 4rem auto 5rem auto;
  width: 100%;
  .active {
    background: #e94057;
    color: white;
    border: none;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 0.9rem;
    line-height: 2.5rem;
    margin: 0rem 1rem;
  }
  ul {
    margin-top: 2rem;
  }
  .title-image {
    width: 100%;

    h2 {
      margin-left: 2rem;
    }
  }
  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
  @media screen and (max-width: 500px) {
    li {
      font-size: 0.8rem;
      line-height: 2rem;
      margin: 0rem 1rem;
    }
    .title-image {
      h2 {
        margin-left: 1rem;
        font-size: 1.1rem;
      }
    }
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  height: 3rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    padding: 1rem 1rem;
    margin-right: 1rem;
  }
`;
const Info = styled.div`
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;

  h3 {
    font-size: 0.9rem;
    line-height: 1.7rem;
  }
  a {
    color: #e94057;
    text-decoration: none;
  }
  @media screen and (max-width: 500px) {
    h3 {
      font-size: 0.8rem;
      line-height: 1.7rem;
    }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default Recipe;
