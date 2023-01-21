import { GridColumns, GridRowsProp } from "@mui/x-data-grid";

export const subjectColumns: GridColumns = [
  { field: "name", headerName: "Nazwa przedmiotu", width: 180, editable: true },
];

export const subjectRows: GridRowsProp = [
  { id: 1, name: "Informatyka" },
  { id: 2, name: "Wf" },
  { id: 3, name: "Matematyka" },
  { id: 4, name: "Język angielski" },
];
