import Table, { Column } from "../../Table/index";

export const SingleTable = ({ data }) => {
  return (
    <>
        <Table data={data.data}>
          <Column title={data.title} />
          <Column title="Name" colId="name" />
          <Column title={data.column} colId="value" />
        </Table>
    </>
  );
};
