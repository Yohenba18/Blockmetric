import Table, { Column } from "../../Table/index";

export const SingleTable = ({ data }: any) => {
  return (
    <>
      <div
        className="font-bold text-2xl md:text-4xl font-sans tracking-wide lg:mx-10 mb-10"
      >
        {data.title}
      </div>
      <Table data={data.data}>
        <Column title="Name" colId="name" />
        <Column title={data.column} colId="value" />
      </Table>
    </>
  );
};
