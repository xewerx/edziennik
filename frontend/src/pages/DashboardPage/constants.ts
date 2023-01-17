const baseElements = [
  { name: "Oceny", path: "ratings" },
  { name: "Frekwencja", path: "frequency" },
  { name: "Ogłoszenia", path: "announcements" },
  { name: "Moje dane", path: "mydata" },
];

const studentOrParentNavbarElements = [...baseElements];

const adminNavbarElements = [
  ...baseElements,
  { name: "Stwórz użytkownika", path: "create-user" },
  { name: "Edytuj użytkownika", path: "edit-user" },
  { name: "Dodaj przedmior", path: "add-subject" },
];

const teacherNavbarElements = [
  ...baseElements,
  { name: "Stwórz użytkownika", path: "create-user" },
  { name: "Edytuj użytkownika", path: "edit-user" },
];

const directorNavbarElements = [
  ...baseElements,
  { name: "Dodaj przedmior", path: "add-subject" },
];

export const NavBarElementsByType = new Map([
  ["teacher", teacherNavbarElements],
  ["admin", adminNavbarElements],
  ["studentOrParent", studentOrParentNavbarElements],
  ["director", directorNavbarElements],
]);
