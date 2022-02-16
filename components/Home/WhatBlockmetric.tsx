import Image from "next/image";
import WhatAnalysis from "../../assets/svg/WhatAnalysis.svg";
import Blockmetric from "../../assets/svg/Blockmetric.svg";

const WhatBlockmetric = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto my-20">
        <div className="flex flex-col lg:flex-row gap-10 mx-3 md:mx-10 sm:text-left sm:gap-20 justify-evenly items-center ">
          <div>
            <Image
              src={WhatAnalysis}
              alt="analysis"
              height={500}
              width={500}
              className="md:scale-100"
            />
          </div>
          <div className="flex flex-col gap-5 lg:w-2/4 ">
            <div className="flex gap-2 md:gap-4 items-center">
              <div className="text-4xl font-bold">What is</div>
              <div className="mt-4">
                <Image src={Blockmetric} alt="blockmetric" className="mt-4" />
              </div>
              <div className="text-4xl font-bold">?</div>
            </div>
            <div className="text-text-secondary-100 text-base">
              BlockMetric is an{" "}
              <strong className="text-gray-300">Open-source blockchain analysis platform</strong>, that
              helps you compare between different blockchains from
              Ethereum to Dogecoin according to usecase and helps you find the
              perfect blockchain for your needs.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatBlockmetric;
