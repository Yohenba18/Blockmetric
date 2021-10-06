import Table, { Column } from "./index";
import data from "../../data/Tabledata";

const Tableshow = () => {
  return (
    <div className="">
    <Table data={data}>
      <Column title="#" colId="id" />
      <Column title="Name" colId="name" />
      <Column title="Transaction(/sec)" colId="transaction" />
      <Column title="Gas price($)" colId="gasprice" />
      <Column title="Hash Rate" colId="hashrate" />
      <Column title="Market size (B)" colId="price" />
      <Column title="Community size" colId="dev" />
    </Table>
    </div>
  );
};

export default Tableshow;
