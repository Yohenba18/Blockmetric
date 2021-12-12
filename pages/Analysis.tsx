import Layout from "../components/shared/Layout";
import { getSession } from "next-auth/client";
import { useEffect, useState } from "react";
import Tableshow from "../components/Table/Tableshow";
import { Button } from "../components/Analysis/Button/Button";
import { useRouter } from "next/router";
import { Analysistables } from "../components/Analysis/Tables/Analysistables";

function Analysis({ coinsData, data }: any) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  console.log(coinsData);

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

  return (
    <>
      <div className="bg-background-primary text-white h-auto">
        <Layout>
          <div className=" bg-gradient-to-b from-background-secondary2">
            <div className="max-w-7xl mx-auto py-10 ">
              <div className="font-bold text-2xl md:text-4xl my-5">Ranking</div>
              <Tableshow data={data} />
            </div>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="font-bold text-2xl md:text-4xl my-5 text-center">
              Detail Analysis
            </div>
            <Button />
          </div>
          <Analysistables />
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

export default Analysis;
