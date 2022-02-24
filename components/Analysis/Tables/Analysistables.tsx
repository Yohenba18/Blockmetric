import { SingleTable } from "./SingleTable";
import { Graph } from "../../Graph/Graph";
import { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";

export const Analysistables = () => {
  const [loading, setLoading] = useState(true);
  const [newdata, setNewData] = useState([]);

  const fetchdata = async (allDataApi: string) => {
    try {
      const analysisData = [] as any;
      const transactionData = await fetch(allDataApi + "Transaction");
      analysisData.push(await transactionData.json());

      const developersData = await fetch(allDataApi + "Developers");
      analysisData.push(await developersData.json());

      const marketData = await fetch(allDataApi + "Price");
      analysisData.push(await marketData.json());

      for (var i in analysisData) {
        analysisData[i].id = i;
      }

      setNewData(analysisData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const allDataApi = "https://blockmetric-back.herokuapp.com/api/v1/";
    fetchdata(allDataApi);
  });

  if (loading) {
    return (
      <>
        <div className="flex justify-center align-middle bg-background-primary h-screen mt-20">
          <Rings
            height="100"
            width="100"
            color="#0FAE96"
            ariaLabel="loading'" //3 secs
          />
        </div>
      </>
    );
  }

  return (
    <div className="max-w-7xl mx-auto my-10">
      {newdata.map((dat: any) => {
        return (
          <>
            <div
              className={`flex flex-col gap-10 my-20 md:flex-row md:justify-evenly  ${
                dat.id % 2 === 0 && "md:flex-row-reverse"
              }`}
            >
              <div id={dat.title} className="text-center">
                <SingleTable data={dat} />
              </div>
              <div>
                <Graph graphData={dat} />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
