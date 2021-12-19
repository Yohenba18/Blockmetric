import whatprovide from "../../data/whatprovide";
import Image from "next/image"

export const WhatPro: React.FC = () => {
    return (
        <div className="h-auto py-40">
        <div className="text-center justify-evenly items-center flex flex-col max-w-7xl mx-auto  ">
          <div className="flex font-bold text-2xl md:text-4xl">
            <h1>What we provide?</h1>
          </div>
          <div className="grid grid-cols-2 mt-12 gap-14">
            {whatprovide.map((provide, index) => (
              <div className="flex flex-col gap-4 items-center grayscale hover:grayscale-0 transition duration-300 ">
                <Image
                  src={provide.image}
                  alt={provide.title}
                  height="300"
                  width="400"
                />
                <div>
                  <h1 className="font-bold text-base md:text-2xl mb-4">
                    {provide.title}
                  </h1>
                  <p className="hidden md:flex text-text-secondary text-sm">
                    {provide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}
