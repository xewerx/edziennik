import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ratingColumns, ratingRows } from "../database/ratings";
import { RootState } from "../state/store";
import FormWrapper from "../ui/FormWrapper";
import Table from "../ui/Table";
import Title from "../ui/Title";

function Ratings() {
  const user = useSelector((state: RootState) => state.userState.user);
  const [columns, setColumns] = useState(ratingColumns);
  const [newColumn, setNewColumn] = useState("");

  const handleOnClick = () => {
    setColumns([
      ...ratingColumns,
      {
        field: newColumn,
        headerName: newColumn,
        type: "number",
        width: 180,
        editable: true,
      },
    ]);
  };

  return (
    <>
      <Title>Oceny</Title>
      {/*@ts-ignore*/}
      <Table columns={columns} rows={ratingRows} />
      {user?.userType !== "studentOrParent" && (
        <FormWrapper>
          <h2>Dodaj kolumnę z ocenami</h2>
          <TextField
            id="outlined-basic"
            label="Nazwa kolumny"
            variant="outlined"
            onChange={(e) => setNewColumn(e.target.value)}
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
      )}
    </>
  );
}

export default Ratings;
