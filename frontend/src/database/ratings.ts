import { GridColumns, GridRowsProp } from "@mui/x-data-grid";

export const ratingColumns: GridColumns = [
  { field: "name", headerName: "Imię i nazwisko", width: 180, editable: true },
  {
    field: "rating1",
    headerName: "Spradzian 1",
    type: "number",
    width: 180,
    editable: true,
  },
  {
    field: "rating2",
    headerName: "Spradzian 2",
    type: "number",
    width: 180,
    editable: true,
  },
];

export const ratingRows: GridRowsProp = [
  {
    id: 1,
    name: "Jan Nowak",
    rating1: 2,
    rating2: 3,
  },
  { id: 2, name: "Jan Nowak", rating1: 2, rating2: 3 },
  { id: 3, name: "Jan Nowak", rating1: 2, rating2: 3 },
  { id: 4, name: "Jan Nowak", rating1: 2, rating2: 3 },
  { id: 5, name: "Jan Nowak", rating1: 2, rating2: 3 },
];
