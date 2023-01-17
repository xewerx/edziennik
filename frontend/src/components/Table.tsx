import React from "react";
import { DataGrid, GridColumns, GridRowsProp } from "@mui/x-data-grid";

interface Props {
  rows: GridRowsProp[];
  columns: GridColumns<object>;
}

function Table({ rows, columns }: Props) {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      experimentalFeatures={{ newEditingApi: true }}
    />
  );
}

export default Table;
