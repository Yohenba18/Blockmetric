import Blogcards from "../components/Blogcards";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className="bg-backblue  text-white h-auto">
      <Layout>
        <div className="text-center h-96 flex flex-col justify-center bg-gradient-to-b from-activepurple">
          <div className="font-extrabold text-5xl md:text-7xl">
            <h1>BlockMetric</h1>
          </div>
          <div className="text-gray-300 text-lg mt-4">
            <p>
              Analyse your perfomance with the real time data of the exisiting
              blockchains
            </p>
          </div>
        </div>
        <Blogcards />
      </Layout>
    </div>
  );
}
