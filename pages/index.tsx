import Blogcards from "../components/Blogcards";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className="bg-backblue text-white h-auto">
      <Layout>
        <div className="text-center h-96 flex flex-col justify-center bg-gradient-to-b from-gradientpurple">
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
        <div className="bg-purplebg h-auto py-16">
          <div className="text-center justify-evenly items-center flex flex-col max-w-7xl mx-auto md:flex-row ">
            <div className="flex font-bold text-2xl md:text-4xl">
              <h1>What we provide?</h1>
            </div>
            <div className="grid gap-7 grid-cols-2 max-w-md">
              <div className="flex flex-col">
                <img src="" alt="" />
                <div>
                  <h1 className="font-semibold text-xl mb-4">Detail analysis</h1>
                  <p className="hidden md:flex text-pfontgray text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <img src="" alt="" />
                <div>
                  <h1 className="font-semibold text-xl mb-4">User friendly environment</h1>
                  <p className="hidden md:flex text-pfontgray text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <img src="" alt="" />
                <div>
                  <h1 className="font-semibold text-xl mb-4">Community support and trust</h1>
                  <p className="hidden md:flex text-pfontgray text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <img src="" alt="" />
                <div>
                  <h1 className="font-semibold text-xl mb-4">Integrated platform</h1>
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
