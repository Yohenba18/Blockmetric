import Table, { Column } from "./index";

const Tableshow = ({ data }: any) => {

  return (
    <Table data={data}>
      <Column title="Name" colId="name" />
      <Column title="Protocol" colId="protocol" />
      <Column title="Transaction(/sec)" colId="transaction" />
      <Column title="Gas price($)" colId="gasprice" />
      <Column title="Hash Rate" colId="hash" />
      <Column title="Market size (B)" colId="price" />
      <Column title="Active Devs (/week)" colId="developers" />
    </Table>
  );
};

export default Tableshow;
