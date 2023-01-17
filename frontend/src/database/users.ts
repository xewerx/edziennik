import { User } from "../state/slices/user";

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
