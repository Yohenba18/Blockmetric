import { SingleTable } from "./Tables/SingleTable";
import data from "../../data/Analysis";

export const Analysistables = () => {
  var count = 0;
  return (
    <div className=" max-w-7xl mx-auto my-10">
      {data.map((dat) => {
        count++;
        return (
          <div
            className={`flex items-center ${
              count % 2 == 0 && "flex-row-reverse"
            }`}
          >
            <div className="w-1/2">
              <SingleTable data={dat} />
            </div>

            <div>Graph</div>
          </div>
        );
      })}
    </div>
  );
};
