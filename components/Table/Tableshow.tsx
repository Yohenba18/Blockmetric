import Table, { Column } from "./index";
import alldata from "../../data/Tabledata";
// import { getAllData } from "../../pages/api/api";
import { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";

const Tableshow = ({ data }: any) => {
  if(!data){
    return <h1>Loading</h1>
  }

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
