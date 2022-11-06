import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function inputHandler(e) {
    setInput(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    navigate("/searched/" + input);
  }
  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch onClick={submitHandler} />
      <input
        placeholder="Search For Recipe..."
        onChange={inputHandler}
        type="text"
        value={input}
      />
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: auto;
  width: 35rem;
  position: relative;
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 1rem 1rem 3rem;
    border: none;
    border-radius: 2rem;
    outline: none;
    width: 100%;
  }
  input:focus,
  input:active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
  input {
    padding: 1rem 1rem 1rem 3rem;
    font-size: 1rem;
  }
`;

export default Search;
