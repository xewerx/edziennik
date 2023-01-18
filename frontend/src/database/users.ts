import { User } from "../state/slices/user";
import { GridColumns, GridRowsProp } from "@mui/x-data-grid";

export const userColumns: GridColumns = [
  { field: "name", headerName: "Imię i nazwisko", width: 180, editable: true },
  {
    field: "email",
    headerName: "E-mail",
    width: 180,
    editable: true,
  },
  {
    field: "role",
    headerName: "Rola",
    width: 180,
    editable: true,
  },
];

export const userRows: GridRowsProp = [
  { id: 1, name: "Jan Nowak", email: "jan@nowak.pl", role: "admin" },
  {
    id: 2,
    name: "Andrzej Lipowy",
    email: "andrzej@lipowy.pl",
    role: "director",
  },
  {
    id: 3,
    name: "Ryszard Dobrowolski",
    email: "ryszard@dobrowolski.pl",
    role: "studentOrParent",
  },
  {
    id: 4,
    name: "Halina Piernik",
    email: "halina@piernik.pl",
    role: "teacher",
  },
];

export const users: User[] = [
  {
    id: 1,
    username: "Jan Nowak",
    email: "jan@nowak.pl",
    password: "123",
    userType: "admin",
  },
  {
    id: 2,
    username: "Andrzej Lipowy",
    email: "andrzej@lipowy.pl",
    password: "123",
    userType: "director",
  },
  {
    id: 3,
    username: "Ryszard Dobrowolski",
    email: "ryszard@dobrowolski.pl",
    password: "123",
    userType: "studentOrParent",
  },
  {
    id: 4,
    username: "Halina Piernik",
    email: "halina@piernik.pl",
    password: "123",
    userType: "teacher",
  },
];
