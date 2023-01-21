import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  announcementsColumns,
  announcementsRows,
} from "../database/announcements";
import { RootState } from "../state/store";
import FormWrapper from "../ui/FormWrapper";
import Table from "../ui/Table";
import Title from "../ui/Title";

interface Props {}

function Announcements(props: Props) {
  const user = useSelector((state: RootState) => state.userState.user);
  const [announcementRows, setAnnouncementRows] = useState(announcementsRows);
  const [newAnnouncementName, setNewAnnouncementName] = useState("");

  const handleOnClick = () => {
    setAnnouncementRows([
      ...announcementsRows,
      {
        id: Math.random(),
        content: newAnnouncementName,
        date: new Date().toLocaleDateString(),
      },
    ]);
  };

  return (
    <>
      <Title>Ogłoszenia</Title>
      {/*@ts-ignore*/}
      <Table rows={announcementRows} columns={announcementsColumns} />
      {user?.userType !== "studentOrParent" && (
        <FormWrapper>
          <h2>Dodaj nowe ogłoszenie</h2>
          <TextField
            id="outlined-basic"
            label="Nowe ogłoszenie"
            variant="outlined"
            onChange={(e) => setNewAnnouncementName(e.target.value)}
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

export default Announcements;
