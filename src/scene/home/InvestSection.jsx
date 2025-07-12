import React from "react";
import { FaCalendarAlt, FaCertificate, FaMagento } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import Card from "./ChooseCard";
import InvestCards from "./InvestCards";

const investCards = [
  {
    id: 1,
    icon: <FaMagento size={30} className="text-red-" />,
    head: "Quality Education",
    text: "Access to high-quality technical education and vocational training programs.",
  },
  {
    id: 2,
    icon: <FaCertificate size={30} className="text-red-" />,
    head: "Certification",
    text: "Nationally and internationally recognized certifications upon completion.",
  },
  {
    id: 3,
    icon: <FaUserGroup size={30} className="text-red-" />,
    head: "Expert Instructors",
    text: "Learn from industry professionals with years of practical experience.",
  },
  {
    id: 4,
    icon: <TbWorld size={30} className="text-red-" />,
    head: "Global Standards",
    text: "Training programs aligned with global industry standards and practices.",
  },
  {
    id: 5,
    icon: <FaMagento size={30} className="text-red-" />,
    head: "Job Placement",
    text: "Training programs aligned with global industry standards and practices.",
  },
  {
    id: 6,
    icon: <FaCalendarAlt size={30} className="text-red-" />,
    head: "Modern Facilities",
    text: "State-of-the-art training facilities and equipment for hands-on learning.",
  },
];

const InvestSection = () => {
  return (
    <>
      <div className="my-6">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">We Invest in You</h1>
          <p className="text-sm sm:text-lg  font-semibold">
            As a TVET trainee, you will receive comprehensive support to ensure
            your success
          </p>
          <div className="flex flex-wrap py-4 gap-8 w-full">
            {investCards.map((item, i) => (
              <div key={i} className="">
                <InvestCards
                  icon={item.icon}
                  head={item.head}
                  text={item.text}
                />
              </div>
            ))}
          </div>
          <p className="text-sm sm:text-lg  font-semibold my-2">
            We are committed to ensuring that every graduate is ready to work or
            start a business.
          </p>
        </div>
      </div>
    </>
  );
};

export default InvestSection;
