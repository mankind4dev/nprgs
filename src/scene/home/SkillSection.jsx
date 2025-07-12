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
        <h1 className="text-xl font-extrabold">
          Choose Your Learning Skill Path
        </h1>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2 w-full sm:w-2xl ">
            This initiative will reach all six geo-political zones, focusing on
            technical and vocational training:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-3">
            <ul>
              <h1 className="text-lg font-extrabold">Abuja</h1>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">Web Dev</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">Cyber Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">Solar Installation</span>
              </div>
            </ul>
            <ul>
              <h1 className="text-lg font-extrabold">Kebbi</h1>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">Web Dev</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">Cyber Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">Cosmetology</span>
              </div>
            </ul>
            <ul>
              <h1 className="text-lg font-extrabold">Ondo</h1>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">Graphics Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">
                  Beauty & Cosmetology  
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">Solar Installation</span>
              </div>
            </ul>
            <ul>
              <h1 className="text-lg font-extrabold">Delta</h1>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">Graphics Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">
                  Agr-packaging 
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">Electrical work</span>
              </div>
            </ul>
            <ul>
              <h1 className="text-lg font-extrabold">Bauchi</h1>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">Graphics Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">
                  Beauty & Cosmetology  
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">Solar Installation</span>
              </div>
            </ul>
            <ul>
              <h1 className="text-lg font-extrabold">Anambra</h1>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">Graphics Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">
                  Beauty & Cosmetology  
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">Solar Installation</span>
              </div>
            </ul>
            {/* {trainingItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-sm">{item}</span>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillSection;
