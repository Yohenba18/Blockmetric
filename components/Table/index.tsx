import React, { createContext } from "react";
export { default as Column } from "./Column";

interface ContextType {
  setCols: (val: string) => void;
}

export interface TableProps {
  data: any[];
}

export const TableContext = createContext<ContextType>({
  setCols: (val: string) => {},
});

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
      <table className="table-auto mt-10 w-full mx-auto ">
        <thead className="bg-background-table text-text-secondary">
          <tr>{props.children}</tr>
        </thead>
        <tbody>
          {props.data.map((row: any, rowIndex: number) => (
            <tr key={rowIndex} className="border-separate border-t-2">
              {cols.map((col: string, colIndex: number) => (
                <td key={colIndex} className="table-cell text-center px-2 py-2 bg-background-table">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableContext.Provider>
  );
};

export default Table;
