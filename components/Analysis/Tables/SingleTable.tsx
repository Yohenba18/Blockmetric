import Table, { Column } from "../../Table/index";

export const SingleTable = ({ data }) => {
  return (
    <>
      <div>{data.title}</div>
      <Table data={data.data}>
        <Column title="Name" colId="name" />
        <Column title={data.column} colId="value" />
      </Table>
    </>
  );
};
