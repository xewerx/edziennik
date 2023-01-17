import { GridColumns, GridRowsProp } from "@mui/x-data-grid";

export const frequencyColumns: GridColumns = [
  { field: "name", headerName: "Imię i nazwisko", width: 180, editable: true },
  {
    field: "date1",
    headerName: "21.01.2022",
    type: "boolean",
    editable: true,
  },
  {
    field: "date2",
    headerName: "22.01.2022",
    type: "boolean",
    editable: true,
  },
  {
    field: "date3",
    headerName: "23.01.2022",
    type: "boolean",
    editable: true,
  },
  {
    field: "date4",
    headerName: "24.01.2022",
    type: "boolean",
    editable: true,
  },
  {
    field: "date5",
    headerName: "25.01.2022",
    type: "boolean",
    editable: true,
  },
];

export const frequencyRows: GridRowsProp = [
  {
    id: 1,
    name: "Jan Nowak1",
    date1: true,
    date2: true,
    date3: false,
    date4: false,
    date5: false,
  },
  {
    id: 2,
    name: "Jan Nowak2",
    date1: true,
    date2: true,
    date3: true,
    date4: false,
    date5: true,
  },
  {
    id: 3,
    name: "Jan Nowak3",
    date1: false,
    date2: true,
    date3: false,
    date4: true,
    date5: true,
  },
  {
    id: 4,
    name: "Jan Nowak4",
    date1: true,
    date2: true,
    date3: false,
    date4: true,
    date5: true,
  },
];
