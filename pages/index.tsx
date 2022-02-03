import Image from "next/image";
import analysis from "../assets/photo/analysis.jpg";
import teams from "../assets/svg/team.svg";
import Blogcards from "../components/Home/Cards/Blogcards";
import Layout from "../components/shared/Layout";
import { WhatPro } from "../components/Home/WhatPro";
import Tableshow from "../components/Table/Tableshow";

export default function Home({ data }: any) {
  return (
    <>
      <Layout>
        <div className="text-center  flex flex-col justify-center px-5 py-28 bg-gradient-to-b from-background-secondary2">
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
        <div className="flex flex-col gap-5 max-w-7xl mx-auto md:items-start h-96">
          <div className="font-bold text-2xl md:text-4xl md:text-left font-heading tracking-wide pl-3">
            <h1>OVERALL RANKING</h1>
          </div>
          <Tableshow data={data} />
        </div>
        <div className="items-center flex flex-col md:flex-row md:justify-evenly gap-8 h-auto max-w-7xl mx-5 lg:mx-auto">
          <div className="flex flex-col md:flex-row gap-10 p-5">
            <Image
              src={teams}
              alt="We"
              width={500}
              height={500}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col gap-5 max-w-xl my-10 md:my-40">
            <h1 className="flex text-center sm:text-left font-bold text-2xl md:text-4xl">
              Who are we?
            </h1>
            <div className="text-text-secondary text-base">
              BlockMetric is an{" "}
              <strong className="text-gray-300">
                Open-source blockchain analysis platform
              </strong>
              , that helps you helps you compare between different blockchains
              from Ethereum to Dogecoin according to usecase and helps you find
              the perfect blockchain for your needs.
            </div>
          </div>
        </div>
        <WhatPro />
        <Blogcards />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const result = await fetch("https://blockmetric-back.herokuapp.com/api/v1/");
  const data = await result.json();
  return {
    props: { data },
  };
}
