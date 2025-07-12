import React from "react";

const SkillsCard = ({key, state, icon, skill1, skill2, skill3 }) => {
  return (
    <>
      <ul key={key}>
        <h1 className="text-lg font-extrabold">{state}</h1>
        <div className="flex items-center space-x-2">
          {icon}
          <span className="text-sm">{skill1}</span>
        </div>
        <div className="flex items-center space-x-2">
          {icon}
          <span className="text-sm">{skill2}</span>
        </div>
        <div className="flex items-center space-x-2">
          {icon}
          <span className="text-sm">{skill3}</span>
        </div>
      </ul>
    </>
  );
};

export default SkillsCard;
