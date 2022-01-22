import React, { createContext } from "react";
export { default as Column } from "./Column";

interface ContextType {
  setCols: (val: string) => void;
}

export interface TableProps {
  data: any;
}

export const TableContext = createContext<ContextType>({
  setCols: (val: string) => {},
});

// function capitalizeFirstLetter(string: String) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

const Table: React.FC<TableProps> = (props) => {
  const [cols, setCols] = React.useState<Array<string>>([]);
  let tmpCols: Array<string> = [];

  return (
    <TableContext.Provider
      value={{
        setCols: (val: string) => {
          tmpCols.push(val);
          tmpCols.length === React.Children.toArray(props.children).length &&
            setCols(tmpCols);
        },
      }}
    >
      <div className="bg-background-primary p-2 rounded-md overflow-x-auto mx-auto w-full">
        <table className="table-auto lg:w-full">
          <thead className="bg-background-table text-text-secondary text-sm">
            <tr>
              {props.children}
            </tr>
          </thead>
          <tbody>
            {props.data.map((row: any, rowIndex: number) => (
              <tr
                key={rowIndex}
                className="border-separate border-background-primary border-t-4"
              >
                {cols.map((col: string, colIndex: number) => (
                  <td
                    key={colIndex}
                    className="table-cell text-center px-2 py-2 bg-background-table text-lg"
                  >
                    {row[col] === null || row[col] === 0 ? "----" : row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TableContext.Provider>
  );
};

export default Table;
