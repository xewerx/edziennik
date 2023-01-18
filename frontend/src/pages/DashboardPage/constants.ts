const baseElements = [
  { name: "Oceny", path: "ratings" },
  { name: "Frekwencja", path: "frequency" },
  { name: "Ogłoszenia", path: "announcements" },
  { name: "Moje dane", path: "mydata" },
];

const studentOrParentNavbarElements = [...baseElements];

const adminNavbarElements = [
  ...baseElements,
  { name: "Użytkownicy", path: "users" },
  { name: "Dodaj przedmiot", path: "add-subject" },
];

const teacherNavbarElements = [
  ...baseElements,
  { name: "Użytkownicy", path: "users" },
];

const directorNavbarElements = [
  ...baseElements,
  { name: "Dodaj przedmiot", path: "add-subject" },
];

export const NavBarElementsByType = new Map([
  ["teacher", teacherNavbarElements],
  ["admin", adminNavbarElements],
  ["studentOrParent", studentOrParentNavbarElements],
  ["director", directorNavbarElements],
]);
