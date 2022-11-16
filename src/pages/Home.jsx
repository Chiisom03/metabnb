import React from "react";
import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Hero from "../components/Hero";
import Inspirations from "../components/Inspirations";

const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Inspirations />
      <Banner />
    </>
  );
};

export default Home;
