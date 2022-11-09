import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Couisine from "./Couisine";
import Searched from "./Searched";
import Recipe from "./Recipe";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/couisine/:type" element={<Couisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;
