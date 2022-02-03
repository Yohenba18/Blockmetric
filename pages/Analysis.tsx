import Layout from "../components/shared/Layout";
import { getSession } from "next-auth/client";
import { useEffect, useState } from "react";
import Tableshow from "../components/Table/Tableshow";
import { Button } from "../components/Analysis/Button/Button";
import { useRouter } from "next/router";
import { Analysistables } from "../components/Analysis/Tables/Analysistables";
import Loader from "react-loader-spinner";
import { useMoralis } from "react-moralis";

function Analysis({ data, analysisData }: any) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useMoralis();

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (session || isAuthenticated) {
        setLoading(false);
      } else {
        alert("You are not Logged in");
        router.push("/Login");
      }
    };
    securePage();
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  // (
  //   <>
  //     <Layout>
  //       <div className="flex justify-center align-middle bg-background-primary h-96">
  //         <Loader
  //           type="Circles"
  //           color="#02DAC5"
  //           height={200}
  //           width={200}
  //           timeout={3000} //3 secs
  //         />
  //       </div>
  //     </Layout>
  //   </>
  // );

  return (
    <>
      <Layout>
        <div className="bg-gradient-to-b from-background-secondary2">
          <div className="max-w-7xl mx-auto py-10 ">
            <div className="font-bold text-2xl md:text-5xl my-5 font-heading tracking-wide ml-5">
              Ranking
            </div>
            <Tableshow data={data} />
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center font-bold text-2xl lg:text-5xl my-5 text-center font-heading tracking-wide gap-8 mb-5">
            <hr className="border-activepurple shadow-lg shadow-cyan-500/50  w-20 sm:w-40  md:w-60  lg:w-80 border-2 bg-activepurple" />
            Detail Analysis
            <hr className="border-activepurple shadow-lg shadow-cyan-500/50  w-20 sm:w-40  md:w-60  lg:w-80 border-2 bg-activepurple" />
          </div>
          <Button />
        </div>
        <Analysistables data={analysisData} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const allDataApi = "https://blockmetric-back.herokuapp.com/api/v1/";

  const result = await fetch(allDataApi);
  const data = await result.json();

  const analysisData = [];

  const transactionData = await fetch(allDataApi + "Transaction");
  analysisData.push(await transactionData.json());

  const developersData = await fetch(allDataApi + "Developers");
  analysisData.push(await developersData.json());

  const marketData = await fetch(allDataApi + "Price");
  analysisData.push(await marketData.json());

  for (var i in analysisData) {
    analysisData[i].id = i;
  }

  return {
    props: { data, analysisData },
  };
}

export default Analysis;
