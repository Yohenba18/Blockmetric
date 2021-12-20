import whatprovide from "../../data/whatprovide";
import Image from "next/image";

export const WhatPro: React.FC = () => {
  return (
    <div className="h-auto py-40">
      <div className="text-center justify-evenly items-center flex flex-col max-w-7xl mx-auto  ">
        <div className="flex font-bold text-2xl md:text-4xl">
          <h1>What we provide?</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8 md:gap-14 gap-x-20 ">
          {whatprovide.map((provide, index) => (
            <div className="flex flex-col gap-4 items-center">
              <div className="overflow-hidden w-8/12 xs:w-8/12 sm:w-3/5">
                <div className=" hover:scale-125 transition duration-300">
                  <Image
                    src={provide.image}
                    alt={provide.title}
                    width={400}
                    height={300}
                    objectFit="cover"
                  />
                </div>
              </div>
              <div>
                <h1 className="font-bold text-lg md:text-3xl mb-4">
                  {provide.title}
                </h1>
                <p className="hidden md:flex text-text-secondary text-sm max-w-lg">
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
