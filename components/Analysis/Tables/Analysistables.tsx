import { SingleTable } from "./SingleTable";
import data from "../../../data/Analysis";

export const Analysistables = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      {data.map((dat) => {
        return (
          <>
          <div
            className={`flex flex-col my-5 md:flex-row md:justify-between items-center ${
              dat.id % 2 === 0 && "md:flex-row-reverse"
            }`}
          >
            <div className="w-1/2">
              <SingleTable data={dat} />
            </div>
            <div>Graph</div>
          </div>
          </>
        );
      })}
    </div>
  );
};
