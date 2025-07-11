import React from "react";
import SliderHome from "./SliderHome";
import HeroSection from "./HeroSection";
import SuccessSection from "./SuccessSection";
import SkillSection from "./SkillSection";
import NewsUpdate from "./NewsUpdate";

const Home = () => {
  return (
    <>
      <div className="bg-gray-200 w-full h- ">
        <SliderHome />
        <div className="flex flex-col px-5 py-2">
          <HeroSection />
        </div>
        <SuccessSection />
        <div className="flex flex-col px-5 py-2">
          <SkillSection />
          <NewsUpdate />
        </div>
        <div className="flex flex-col space-y-1"></div>
      </div>
    </>
  );
};

export default Home;
