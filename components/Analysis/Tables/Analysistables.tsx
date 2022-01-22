import { SingleTable } from "./SingleTable";
// import data from "../../../data/Analysis";
import { Graph } from "../../Graph/Graph";

export const Analysistables = ({ data }: any) => {
  // data.map((analysisData: any) => {
  //  return analysisData.data.sort(({ a, b }: any) => b.value - a.value);
  // });
  // console.log(data)

  return (
    <div className="max-w-7xl mx-auto my-10">
      {data.map((dat: any) => {
        return (
          <>
            <div
              className={`flex flex-col gap-10 my-20 md:flex-row md:justify-evenly items-center ${
                dat.id % 2 === 0 && "md:flex-row-reverse"
              }`}
            >
              <div className="text-center">
                <SingleTable data={dat} />
              </div>
              <div>
                <Graph />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
