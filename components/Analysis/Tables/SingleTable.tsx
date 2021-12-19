import Table, { Column } from "../../Table/index";

export const SingleTable = ({ data }: any) => {
  return (
    <>
      <div className="font-bold text-2xl md:text-4xl mb-0 font-heading tracking-wide">{data.title}</div>
      <Table data={data.data}>
        <Column title="Name" colId="name" />
        <Column title={data.column} colId="value" />
      </Table>
    </>
  );
};
