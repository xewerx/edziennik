import { GridColumns, GridRowsProp } from "@mui/x-data-grid";

export const announcementsColumns: GridColumns = [
  { field: "content", headerName: "Treść", width: 280, editable: true },
  {
    field: "date",
    headerName: "Data dodania",
    type: "date",
    editable: true,
  },
];

export const announcementsRows: GridRowsProp = [
  {
    id: 1,
    content: "Zebranie rodziców",
    date: "25.01.2022",
  },
  {
    id: 2,
    content: "Wycieczka szkolna",
    date: "26.01.2022",
  },
  {
    id: 3,
    content: "Wigilia klasowa",
    date: "22.01.2022",
  },
];
