import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="">
        <div className="mb-6">
          <h1 className="text-xl font-bold">
            Unlock your future with skills that matter
          </h1>
          <p className="text-sm font-bold">
            National poverty Reduction with Growth Strategy
          </p>
          <motion.p
            className="w-full sm:max-w-3/4 text-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aut.
            Ipsa labore voluptatibus expedita dolore temporibus illo mollitia.
            Nobis architecto cupiditate sit, deserunt, tempora modi debitis
            accusantium ipsa commodi optio aliquid impedit error. Provident
            repudiandae neque quisquam quos beatae sunt fuga? Architecto
            voluptas minima iste quo, earum laudantium atque, eum commodi odit
            autem reiciendis? At quae nostrum laborum facilis consequuntur
            nesciunt corporis similique. Fugit nostrum, commodi quos cupiditate
            maiores quisquam accusamus asperiores porro veniam voluptatibus
            harum suscipit consequuntur perferendis eos. Earum animi asperiores
            maiores eius ducimus officia adipisci obcaecati qui itaque
            perferendis repellat repellendus consectetur necessitatibus quo a,
            dolorem laudantium?
          </motion.p>
          <button className="px-6 py-2 bg-red-800 rounded-[8px] mt-2 transition hover:bg-amber-900 duration-75">
            Apply Now
          </button>
        </div>
        <div className="">
          <h1>What is the NPRGS Initiative?</h1>
          <div className="flex space-x-1">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-3/5 space-y-3 order-2 md:order-1">
                <motion.p
                  className="text-sm text-gray-700"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  ducimus dolor dolorum saepe, natus rerum magnam exercitationem
                  architecto quae officia nam, similique maxime excepturi quo
                  pariatur sunt! Fugit, quibusdam numquam.
                </motion.p>
                <motion.p
                  className="text-sm text-gray-700"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  ducimus dolor dolorum saepe, natus rerum magnam exercitationem
                  architecto quae officia nam, similique maxime excepturi quo
                  pariatur sunt! Fugit, quibusdam numquam.
                </motion.p>
                <motion.p
                  className="text-sm text-gray-700"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  aut. Ipsa labore voluptatibus expedita dolore temporibus illo
                  mollitia. Nobis architecto cupiditate sit, deserunt, tempora
                  modi debitis accusantium ipsa commodi optio aliquid impedit
                  error. Provident repudiandae neque quisquam quos beatae sunt
                  fuga? Architecto voluptas minima iste quo, earum laudantium
                  atque, eum commodi odit autem reiciendis? At quae nostrum
                  laborum facilis consequuntur nesciunt corporis similique.
                  Fugit nostrum, commodi quos cupiditate maiores quisquam
                  accusamus asperiores porro veniam voluptatibus harum suscipit
                  consequuntur perferendis eos. Earum animi asperiores maiores
                  eius ducimus officia adipisci obcaecati qui itaque perferendis
                  repellat repellendus consectetur necessitatibus quo a, dolorem
                  laudantium?
                </motion.p>
                <div>
                  <h2 className="font-semibold text-lg mb-1">Our Goals:</h2>
                  <motion.ul
                    className="list-disc pl-5 text-sm text-gray-700"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <li>Expand tech training nationwide</li>
                    <li>Empower youth with real-world skills</li>
                    <li>Promote innovation and digital literacy</li>
                    <li>cadvsfg</li>
                  </motion.ul>
                </div>
              </div>
              <div className="w-full md:w-2/5 order-1 md:order-2">
                <img
                  src="/images/nprs.jpg"
                  alt="Our mission illustration"
                  className="w-full h-[400px] md:h-[500px] object-cover rounded shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
