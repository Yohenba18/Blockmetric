import Table, { Column } from "./index";
import alldata from "../../data/Tabledata";
// import { getAllData } from "../../pages/api/api";
import { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";

const Tableshow = ({ data }: any) => {
  // const { data, error } = useSWR("http://localhost:5000/api/v1/", fetcher);
  // if (error) return <div>failed to load</div>;
  // console.log(data);
  // if (!data) {
  //   return <h1>loading...</h1>;
  // }
  // const [data, setData] = useState();

  // useEffect(() => {
  //   async () => {
  //     const result = await fetch("http://localhost:5000/api/v1/");
  //     const resultjson = await result.json();
  //     console.log(resultjson);
  //     setData(resultjson);
  //   };
  // });

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
