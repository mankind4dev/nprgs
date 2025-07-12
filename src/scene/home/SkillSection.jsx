import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import SkillsCard from "./SkillsCard";

const trainingItems = [
  {
    id: 1,
    state: "Abuja",
    icon: <FaCheckCircle className="text-green-600 text-sm" />,
    skill1: "Web Dev",
    skill2: "Cyber Security",
    skill3: "Solar Installation",
  },
  {
    id: 2,
    state: "Anambra",
    icon: <FaCheckCircle className="text-green-600 text-sm" />,
    skill1: "Web Dev",
    skill2: "Cyber Security",
    skill3: "Cosmetology",
  },
  {
    id: 3,
    state: "Bauchi",
    icon: <FaCheckCircle className="text-green-600 text-sm" />,
    skill1: "Web Dev",
    skill2: "Cyber Security",
    skill3: "Solar Installation",
  },
  {
    id: 4,
    state: "Delta",
    icon: <FaCheckCircle className="text-green-600 text-sm" />,
    skill1: "Web Dev",
    skill2: "Cyber Security",
    skill3: "Solar Installation",
  },
  {
    id: 5,
    state: "Kebbi",
    icon: <FaCheckCircle className="text-green-600 text-sm" />,
    skill1: "Web Dev",
    skill2: "Cyber Security",
    skill3: "Solar Installation",
  },
  {
    id: 6,
    state: "Ondo",
    icon: <FaCheckCircle className="text-green-600 text-sm" />,
    skill1: "Graphics Design",
    skill2: "Beauty & Cosmetology",
    skill3: "Solar Installation",
  },
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
          <div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-3"
          >
            {trainingItems.map((items, i) => (
              <SkillsCard
              key={i}
                state={items.state}
                icon={items.icon}
                skill1={items.skill1}
                skill2={items.skill2}
                skill3={items.skill3}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillSection;
