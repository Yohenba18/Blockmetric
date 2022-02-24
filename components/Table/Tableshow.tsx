import { useEffect, useState } from "react";
import Table, { Column } from "./index";
import { Rings } from "react-loader-spinner";

// { data }: any
const Tableshow = () => {
  const [loading, setLoading] = useState(true);
  const [newdata, setNewData] = useState();

  const fetchdata = async () => {
    await fetch("https://blockmetric-back.herokuapp.com/api/v1/")
      .then((res) => res.json())
      .then((data) => {
        setNewData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // const allDataApi = "https://blockmetric-back.herokuapp.com/api/v1/";
    fetchdata();
  }, []);


  if (loading) {
    return (
      <>
        <div className="flex justify-center align-middle bg-background-primary h-screen mt-10">
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
    <>
      <Table data={newdata}>
        <Column title="Name" colId="name" />
        <Column title="Protocol" colId="protocol" />
        <Column title="Transaction(/sec)" colId="transaction" />
        <Column title="Gas price($)" colId="gasprice" />
        <Column title="Hash Rate" colId="hash" />
        <Column title="Market size (B)" colId="price" />
        <Column title="Active Devs (/week)" colId="developers" />
      </Table>
    </>
  );
};

export default Tableshow;
