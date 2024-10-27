import React, {  } from "react";
import Banner from "../components/Banner";
import BestSeller from "../components/BestSeller";
import CtaSection from "../components/CtaSection";
import AboutShop from "../components/AboutShop";
import FeaturedSystems from "../components/FeaturedSystems";
const Home = () => {

  return (
    <>
    <Banner/>
    <AboutShop/>
    <BestSeller/>
    <FeaturedSystems/>
    <CtaSection/>
    </>
  );
};

export default Home;
