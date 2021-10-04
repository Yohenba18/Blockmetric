import whatprovide from "../../data/whatprovide";
import Image from "next/image"

export const WhatPro = () => {
    return (
        <div className="h-auto py-48">
        <div className="text-center justify-evenly items-center flex flex-col max-w-7xl mx-auto md:flex-row ">
          <div className="flex font-bold text-2xl md:text-4xl">
            <h1>What we provide?</h1>
          </div>
          <div className="grid gap-7 grid-cols-2 max-w-2xl mt-6 md:mt-0">
            {whatprovide.map((provide, index) => (
              <div className="flex flex-col gap-4 items-center">
                <Image
                  src={provide.image}
                  alt={provide.title}
                  height="150"
                  width="150"
                />
                <div>
                  <h1 className="font-bold text-base md:text-xl mb-4">
                    {provide.title}
                  </h1>
                  <p className="hidden md:flex text-pfontgray text-sm">
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
