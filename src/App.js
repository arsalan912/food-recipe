import Category from "./componants/Category";
import Pages from "./pages/Pages";
import Search from "./componants/Search";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { SiIfood } from "react-icons/si";
import { BsFillSuitHeartFill } from "react-icons/bs";
import Navbar from "./componants/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StickContainer>
          <StickContainerInner>
            <Navbar />
            <Search />
            <Category />
          </StickContainerInner>
        </StickContainer>
        <AppContainer>
          <Pages />
        </AppContainer>
      </BrowserRouter>
    </div>
  );
}
const StickContainer = styled.div`
  background-image: url("https://a.storyblok.com/f/67418/1920x1280/166659692b/ella-olsson-opbjwbccaeo-unsplash.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  @media screen and (max-width: 550px) {
    background-position-x: 70%;
  }
`;
const StickContainerInner = styled.div`
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const AppContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export default App;
