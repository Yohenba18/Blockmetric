import Blogcards from "../components/cards/Blogcards";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Image from "next/image";
import analysis from "../assets/photo/analysis.jpg";
import friendly from "../assets/photo/friendly.png";

export default function Home() {
  return (
    <div className="bg-backblue text-white h-auto">
      <Layout>
        <div className="text-center h-96 py-20 flex flex-col justify-center px-5 bg-gradient-to-b from-gradientpurple">
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
        <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start h-96">
          <div className="font-bold text-2xl md:text-4xl">
            <h1>OVERALL RANKING</h1>
          </div>
          <Table />
        </div>
        <div className="items-center flex flex-col md:flex-row md:justify-between h-96 max-w-7xl mx-auto">
          <div className="flex align-center h-100 w-100 p-5">
            <Image src={analysis} alt="analysis" />
          </div>
          <div className="flex flex-col items-center md:ml-10">
            <div className="flex font-bold text-2xl md:text-4xl mb-5">
              Who are we?
            </div>
            <p className="md:flex text-pfontgray text-base text-center md:text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor{" "}
            </p>
          </div>
        </div>
        <div className="h-auto py-48">
          <div className="text-center justify-evenly items-center flex flex-col max-w-7xl mx-auto md:flex-row ">
            <div className="flex font-bold text-2xl md:text-4xl">
              <h1>What we provide?</h1>
            </div>
            <div className="grid gap-7 grid-cols-2 max-w-2xl mt-6 md:mt-0">
              <div className="flex flex-col gap-4 items-center">
                <Image
                  src={friendly}
                  alt="user fiendly"
                  height="150"
                  width="150"
                />
                <div>
                  <h1 className="font-bold text-base md:text-xl mb-4">
                    Detail analysis
                  </h1>
                  <p className="hidden md:flex text-pfontgray text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <Image
                  src={friendly}
                  alt="user fiendly"
                  height="150"
                  width="150"
                />
                <div>
                  <h1 className="font-bold text-base md:text-xl mb-4">
                    User friendly environment
                  </h1>
                  <p className="hidden md:flex text-pfontgray text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <Image
                  src={friendly}
                  alt="user fiendly"
                  height="150"
                  width="150"
                />
                <div>
                  <h1 className="font-bold text-base md:text-xl mb-4">
                    Community support and trust
                  </h1>
                  <p className="hidden md:flex text-pfontgray text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <Image
                  src={friendly}
                  alt="user fiendly"
                  height="150"
                  width="150"
                />
                <div>
                  <h1 className="font-bold text-base md:text-xl mb-4">
                    Integrated platform
                  </h1>
                  <p className="hidden md:flex text-pfontgray text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Blogcards />
      </Layout>
    </div>
  );
}
