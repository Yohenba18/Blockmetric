import whatprovide from "../../data/whatprovide";
import Image from "next/image";
import { motion } from "framer-motion";

export const WhatPro: React.FC = () => {
  return (
    <div className="my-20 md:my-40">
      <div className="text-center justify-evenly items-center flex flex-col max-w-7xl md:mx-auto">
        <div className="flex items-center font-bold text-2xl md:text-4xlg gap-4 md:gap-4">
          <hr className="border-activepurple shadow-lg shadow-cyan-500/50 w-12 sm:w-40 md:w-48  lg:w-80 border-2 bg-activepurple" />
          <h1>What we provide?</h1>
          <hr className="border-activepurple shadow-lg shadow-cyan-500/50 w-12 sm:w-40  md:w-48 lg:w-80 border-2 bg-activepurple" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8 md:gap-14  ">
          {whatprovide.map((provide) => (
            <div key={provide.id} className="flex flex-col gap-4 items-center text-center">
              <motion.div
                className="overflow-hidden w-8/12 xs:w-8/12 sm:w-3/5"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={provide.image}
                  alt={provide.title}
                  width={400}
                  height={300}
                />
              </motion.div>
              <div className="flex flex-col items-center">
                <h1 className="font-semibold text-lg md:text-3xl mb-4">
                  {provide.title}
                </h1>
                <p className="hidden md:flex text-text-secondary-100 text-lg text-centermax-w-lg">
                  {provide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
