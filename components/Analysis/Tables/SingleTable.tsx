import Table, { Column } from "../../Table/index";

//   const compare = ({a, b}: any)  => {
//   Use toUpperCase() to ignore character casing
//   const bandA = a.value
//   const bandB = b.value

//   let comparison = 0;
//   if (bandA > bandB) {
//     comparison = 1;
//   } else if (bandA < bandB) {
//     comparison = -1;
//   }
//   return comparison;
// }

export const SingleTable = ({ data }: any) => {
  console.log("this is the data" + data);
  // data.map((dat:any) => console.log(dat))

  return (
    <>
      <div className="font-bold text-2xl md:text-4xl mb-0 font-heading tracking-wide">
        {data.title}
      </div>
      <Table data={data.data}>
        <Column title="Name" colId="name" />
        <Column title={data.column} colId="value" />
      </Table>
    </>
  );
};
