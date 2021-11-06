import { SingleTable } from "./SingleTable";
import data from "../../../data/Analysis";
import { Graph } from "../../Graph/Graph";
import Table, { Column } from "../../Table/index";
import { useState } from "react";

export const Analysistables = ({ coinsData }:any) => {
  coinsData.filter((coin:any) => {
    return (coin.market_cap = Math.floor(coin.market_cap / 1000000000));
  });


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
              <div className="px-36">
                <Graph />
              </div>
            </div>
          </>
        );
      })}
      <div
        className={`flex flex-col my-5 md:justify-between items-center md:flex-row-reverse `}
      >
        <div className="w-1/2">
          <div className="font-bold text-2xl md:text-4xl mb-0 ">
            Market Size
          </div>
          <Table data={coinsData}>
            <Column title="name" colId="name" />
            <Column title="Market Cap(B)" colId="market_cap" />
          </Table>
        </div>
        <div className="px-36">
          <Graph />
        </div>
      </div>
    </div>
  );
};
