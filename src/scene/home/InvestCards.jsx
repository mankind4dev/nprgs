import React from "react";

const InvestCards = ({icon, head, text}) => {
  return (
    <>
      <div className="flex flex-col space-y-2 p-6 w-[290px] h-[220px] sm:h-[250px]  bg-green-300 rounded-2xl hover:skew-1 transition-all">
        <div className="self-center rounded-full p-4 bg-green-400">
          {icon}
        </div>
        <h1 className="font-bold">{head}</h1>
        <p className="">{text}</p>
      </div>
    </>
  );
};

export default InvestCards;
