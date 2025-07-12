import React from "react";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";

const SuccessSection = () => {
  return (
    <>
      <div className="my-4">
        <div className="w-full sm:w-4/5 px-5">
          <h1 className="text-sm md:text-lg font-extrabold">
            Start Your Journey to Skills, Jobs, and Entrepreneurship
          </h1>
          <motion.p
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            The NPRGS Initiative offers two flexible training options tailored
            to meet diverse needs. Whether you're just starting out or looking
            to advance your career, each pathway is designed to align with your
            background, experience, and professional goals. You can choose the
            option that best supports your learning journey and future
            aspirations.
          </motion.p>
        </div>
        <div className="mt-3 w-full overflow-x-auto overflow-y-hidden">
          <div className="w-[2800px] whitespace-nowrap">
            <ImageCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessSection;
