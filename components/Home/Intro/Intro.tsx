import React from "react";
import Image from "next/image";
import image from "../../../assets/svg/analysis.svg";

const Intro = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around align-middle items-center gap-4 lg:gap-14 pt-5 my-18 max-w-6xl mx-10 sm:mx-20 md:mx-auto">
        <div className="md:pl-5 flex flex-col gap-6">
          <div className="flex flex-col gap-7">
            <h1 className="text-white tracking-wider font-sans font-bold text-4xl sm:text-5xl lg:text-7xl">
              Blockchain Analysis Platform
            </h1>
            <p className="text-text-secondary-100 text-lg text-gray-300">
              Analyse with the real time data of the exisiting blockchains
            </p>
          </div>
        </div>
        <div>
          <Image
            src={image}
            alt="introimage"
            className="md:scale-100"
            height={600}
            width={600}
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
