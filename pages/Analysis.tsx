import Layout from "../components/shared/Layout";
import { getSession, signIn } from "next-auth/client";
import { useEffect, useState } from "react";
import Tableshow from "../components/Table/Tableshow";
import { Button } from "../components/Button/Button";

function Analysis() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
      } else {
        setLoading(false);
      }
    };
  }, []);

  return (
    <div className="bg-background-primary text-white h-auto">
      <Layout>
        <div className=" bg-gradient-to-b from-background-secondary2">
          <div className="max-w-7xl mx-auto py-10 ">
            <div className="font-bold text-2xl md:text-4xl my-5">Ranking</div>
            <Tableshow />
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="font-bold text-2xl md:text-4xl my-5 text-center">
            Detail Analysis
          </div>
          <Button />
        </div>
      </Layout>
    </div>
  );
}

export default Analysis;
