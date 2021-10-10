import { SingleTable } from "./SingleTable";
import data from "../../../data/Analysis";

export const Analysistables = () => {
  var count = 0;
  return (
    <div className="max-w-7xl mx-auto my-10">
      {data.map((dat) => {
        count++;
        return (
          // <div className="flex flex-col">
          //   <div
          //     className={`flex ${
          //       count % 2 === 0 ? "justify-self-start" : "justify-self-end"
          //     }`}
          //   >
          //     {dat.title}
          //   </div>
          <div
            className={`flex flex-col md:flex-row md:justify-between items-center ${
              count % 2 === 0 && "md:flex-row-reverse"
            }`}
          >
            <div className="w-1/2">
              <SingleTable data={dat} />
            </div>
            <div>Graph</div>
          </div>
          // </div>
        );
      })}
    </div>
  );
};
