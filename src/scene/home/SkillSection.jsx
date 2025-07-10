import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const trainingItems = [
  ",sdljkxhj",
  ",sdljkxhj",
  ",sdljkxhj",
  ",sdljkxhj",
  ",sdljkxhj",
  ",sdljkxhj",
  ",sdljkxhj",
  ",sdljkxhj",
  ",sdljkxhj",
  ",sdljkxhj",
  ",sdljkxhj",
  ",sdljkxhj",
  ",sdljkxhj",
  ",sdljkxhj",
  ",sdljkxhj",
  ",sdljkxhj",
  ",sdljkxhj",
  ",sdljkxhj",
  ",sdljkxhj",
];

const SkillSection = () => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-lg font-extrabold">Choose Your Learning Skill Path</h1>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2">
            Explore High-Impact Training in:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-3">
            {trainingItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillSection;
