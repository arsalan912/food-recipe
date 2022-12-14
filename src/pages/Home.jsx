import React from "react";
import Popular from "../componants/Popular";
import Veggie from "../componants/Veggie";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Popular />
      <Veggie />
    </motion.div>
  );
}

export default Home;
