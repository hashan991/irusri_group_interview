import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Footer from "./components/Footer/Footer";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box>
      <Hero />
      <HowItWorks />
      <Footer />
    </Box>
  );
};

export default App;
