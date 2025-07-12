import React from "react";
import SliderHome from "./SliderHome";
import HeroSection from "./HeroSection";
import SuccessSection from "./SuccessSection";
import SkillSection from "./SkillSection";
import NewsUpdate from "./NewsUpdate";
import ChooseSection from "./ChooseSection";
import InvestSection from "./InvestSection";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-white w-full">
        <SliderHome />
        <div className="flex flex-col px-5 py-2">
          <HeroSection />
        </div>
        <SuccessSection />
        <div className="bg-gray-100">
          <div className="flex flex-col px-5 py-2">
            <SkillSection />
            <InvestSection />
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="flex flex-col px-5 py-2">
            <NewsUpdate />
          </div>
        </div>
        <div className="flex flex-col space-y-1"></div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
