import Table, { Column } from "./index";
import alldata from "../../data/Tabledata";
import { getAllData } from "../../pages/api/api";
import { useEffect, useState } from "react";
import useSWR from "swr";

// const fetcher = async () => {
//   const result = await fetch("http://localhost:5000/api/v1/");
//   const data = await result.json();
//   console.log(data);
//   return data;
// };
// 
const Tableshow = ({ data }: any) => {
  // const { data, error } = useSWR("alldatta", fetcher);
  // if (error) return <div>failed to load</div>;
  // console.log(data);

  return (
    <Table data={data}>
      <Column title="Name" colId="name" />
      <Column title="Protocol" colId="protocol" />
      <Column title="Transaction(/sec)" colId="transaction" />
      <Column title="Gas price($)" colId="gasprice" />
      <Column title="Hash Rate" colId="hash" />
      <Column title="Market size (B)" colId="price" />
      <Column title="Active Devs(week)" colId="developers" />
    </Table>
  );
};

export default Tableshow;
