import Image from "next/image";
import analysis from "../assets/photo/analysis.jpg";

import Blogcards from "../components/Home/Cards/Blogcards";
import Layout from "../components/shared/Layout";
import { WhatPro } from "../components/Home/WhatPro";
import Tableshow from "../components/Table/Tableshow";

export default function Home() {
  return (
    <>
      <div className="bg-background-primary text-white h-auto">
        <Layout>
          <div className="text-center h-96 flex flex-col justify-center px-5 bg-gradient-to-b from-background-secondary2">
            <div className="font-extrabold text-5xl md:text-7xl">
              <h1>BlockMetric</h1>
            </div>
            <div className="text-gray-300 text-xl mt-4">
              <p>
                Analyse your perfomance with the real time data of the exisiting
                blockchains
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto items-center md:items-start h-96">
            <div className="font-bold text-2xl md:text-4xl">
              <h1>OVERALL RANKING</h1>
            </div>
            {/*<Tableshow />*/}
          </div>
          <div className="items-center flex flex-col md:flex-row md:justify-between h-auto max-w-7xl mx-auto">
            <div className="flex align-center h-50 w-50 md:h-100 md:w-100 p-5">
              <Image src={analysis} alt="analysis" />
            </div>
            <div className="flex flex-col items-center md:ml-10">
              <div className="flex font-bold text-2xl md:text-4xl mb-5">
                Who are we?
              </div>
              <p className="md:flex text-text-secondary text-base text-center md:text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor{" "}
              </p>
            </div>
          </div>
          <WhatPro />
          <Blogcards />
        </Layout>
      </div>
    </>
  );
}
