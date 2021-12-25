import Image from "next/image";
import analysis from "../assets/photo/analysis.jpg";
import Blogcards from "../components/Home/Cards/Blogcards";
import Layout from "../components/shared/Layout";
import { WhatPro } from "../components/Home/WhatPro";
import Tableshow from "../components/Table/Tableshow";

export default function Home({ data }: any) {
  return (
    <>
      <div className="bg-background-primary text-white h-auto">
        <Layout>
          <div className="text-center h-96 flex flex-col justify-center px-5 bg-gradient-to-b from-background-secondary2">
            <div className="font-extrabold text-5xl md:text-8xl font-heading">
              <h1>BlockMetric</h1>
            </div>
            <div className="text-gray-300 text-2xl mt-4 font-sans">
              <p>
                Analyse your perfomance with the real time data of the exisiting
                blockchains
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-7xl mx-auto md:items-start h-96">
            <div className="font-bold text-2xl md:text-4xl text-center md:text-left font-heading tracking-wide">
              <h1>OVERALL RANKING</h1>
            </div>
            <Tableshow data={data} />
          </div>
          <div className="items-center flex flex-col md:flex-row md:justify-between gap-8 h-auto max-w-7xl mx-auto">
            <div className="hidden md:flex align-center h-50 w-50 md:h-100 md:w-100 p-5">
              <Image src={analysis} alt="analysis" />
            </div>
            <div className="flex flex-col items-center gap-5 max-w-xl mt-10 md:mt-0">
              <div className="flex font-bold text-2xl md:text-4xl">
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

export async function getServerSideProps() {
  const result = await fetch("http://localhost:5000/api/v1/");
  const data = await result.json();
  console.log(data);

  return {
    props: { data },
  };
}
