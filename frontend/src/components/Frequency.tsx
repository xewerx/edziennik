import React, { useState } from "react";
import { frequencyRows, frequencyColumns } from "../database/frequency";
import Table from "../ui/Table";
import Title from "../ui/Title";

function Frequency() {
  const [rows] = useState(frequencyRows);

  return (
    <>
      <Title>Frekwencja</Title>
      {/*@ts-ignore*/}
      <Table columns={frequencyColumns} rows={rows} />
    </>
  );
}

export default Frequency;
