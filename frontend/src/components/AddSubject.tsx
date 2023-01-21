import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { subjectColumns, subjectRows } from "../database/subjects";
import FormWrapper from "../ui/FormWrapper";
import Table from "../ui/Table";

function AddSubject() {
  const [rows, setRows] = useState(subjectRows);
  const [newSubjectName, setNewSubjectName] = useState("");

  const handleOnClick = () => {
    setRows([
      ...subjectRows,
      {
        id: Math.random(),
        name: newSubjectName,
      },
    ]);
  };

  return (
    <>
      {/*@ts-ignore*/}
      <Table columns={subjectColumns} rows={rows} />
      <FormWrapper>
        <h2>Dodaj przedmiot</h2>
        <TextField
          id="outlined-basic"
          label="Nazwa kolumny"
          variant="outlined"
          onChange={(e) => setNewSubjectName(e.target.value)}
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

export default AddSubject;
