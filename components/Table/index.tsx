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
          setCols(tmpCols);
        },
      }}
    >
      <table className="table-auto">
        <thead>
          <tr>{props.children}</tr>
        </thead>
        <tbody>
          {props.data.map((row: any, rowIndex: number) => (
            <tr key={rowIndex}>
              {cols.map((col: string, colIndex: number) => (
                <td key={colIndex}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableContext.Provider>
  );
};

export default Table;
