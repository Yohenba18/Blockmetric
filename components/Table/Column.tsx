import React, { useEffect } from "react";
import { TableContext } from ".";

interface ColumnProps {
  title: string;
  colId: string;
}

const Column: React.FC<ColumnProps> = (props) => {
  const { setCols } = React.useContext(TableContext);
  useEffect(() => setCols(props.colId), []);

  return <th className="table-cell px-2 py-1 ">{props.title}</th>;
};

export default Column;
