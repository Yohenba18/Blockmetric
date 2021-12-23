import Layout from "../components/shared/Layout";
import { getSession } from "next-auth/client";
import { useEffect, useState } from "react";
import Tableshow from "../components/Table/Tableshow";
import { Button } from "../components/Analysis/Button/Button";
import { useRouter } from "next/router";
import { Analysistables } from "../components/Analysis/Tables/Analysistables";

function Analysis({ data, analysisData }: any) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        alert("You are not Logged in");
        router.push("/Login");
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading) {
    return <h2>Loading.....</h2>;
  }

  analysisData.map((data: any) => {
    data.data.sort(({ a, b }: any) => b.value - a.value);
  });

  return (
    <>
      <div className="bg-background-primary text-white h-auto">
        <Layout>
          <div className=" bg-gradient-to-b from-background-secondary2">
            <div className="max-w-7xl mx-auto py-10 ">
              <div className="font-bold text-2xl md:text-5xl my-5 font-heading tracking-wide">
                Ranking
              </div>
              <Tableshow data={data} />
            </div>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center font-bold text-2xl md:text-5xl my-5 text-center font-heading tracking-wide gap-8 mb-5">
              <hr className="border-activepurple shadow-lg shadow-cyan-500/50  w-20 sm:w-40  md:w-60  lg:w-80 border-2 bg-activepurple" />
              Detail Analysis
              <hr className="border-activepurple shadow-lg shadow-cyan-500/50  w-20 sm:w-40  md:w-60  lg:w-80 border-2 bg-activepurple" />
            </div>
            <Button />
          </div>
          <Analysistables data={analysisData} />
        </Layout>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const result = await fetch("http://localhost:5000/api/v1/");
  const data = await result.json();

  const analysisData = [];
  const transactionData = await fetch(
    "http://localhost:5000/api/v1/Transaction"
  );
  analysisData.push(await transactionData.json());
  const developersData = await fetch("http://localhost:5000/api/v1/Developers");
  analysisData.push(await developersData.json());
  const marketData = await fetch("http://localhost:5000/api/v1/Price");
  analysisData.push(await marketData.json());

  for (var i in analysisData) {
    analysisData[i].id = i;
  }

  // console.log(data);
  // console.log(analysisData);
  return {
    props: { data, analysisData },
  };
}

export default Analysis;
