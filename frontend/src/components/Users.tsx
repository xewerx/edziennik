import React, { useState } from "react";
import Title from "../ui/Title";
import Table from "../ui/Table";
import { userRows, userColumns } from "../database/users";
import FormWrapper from "../ui/FormWrapper";
import { TextField, Button } from "@mui/material";

interface Props {}

function Users(props: Props) {
  const [userRowsState, setUserRowsState] = useState(userRows);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleOnClick = () => {
    setUserRowsState([
      ...userRowsState,
      {
        id: Math.random(),
        name,
        email,
        role,
      },
    ]);
  };

  return (
    <>
      <Title>Użytkownicy</Title>
      {/*@ts-ignore*/}
      <Table columns={userColumns} rows={userRowsState} />
      <FormWrapper>
        <h2>Dodaj kolumnę z ocenami</h2>
        <TextField
          id="outlined-basic"
          label="Imię i nazwisko"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Hasło"
          type="password"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Rola"
          variant="outlined"
          onChange={(e) => setRole(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={handleOnClick}
          sx={{ mt: 2, mb: 1 }}
        >
          Dodaj
        </Button>
      </FormWrapper>
    </>
  );
}

export default Users;
