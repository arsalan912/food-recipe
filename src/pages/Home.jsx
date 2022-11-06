import React from "react";
import Popular from "../componants/Popular";
import Veggie from "../componants/Veggie";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div>
      <Popular />
      <Veggie />
    </motion.div>
  );
}

export default Home;
