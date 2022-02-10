import { SingleTable } from "./SingleTable";
import { Graph } from "../../Graph/Graph";

export const Analysistables = ({ data }: any) => {


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
              <div id={dat.title} className="text-center">
                <SingleTable data={dat} />
              </div>
              <div>
                <Graph graphData={dat}/>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
