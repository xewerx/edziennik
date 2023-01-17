import React from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Table from "../../components/Table";
import { frequencyColumns, frequencyRows } from "../../database/frequency";
import { ratingColumns, ratingRows } from "../../database/ratings";
import { signOutAction } from "../../state/actions/signOutAction";
import { UserType } from "../../state/slices/user";
import { NavBarElementsByType } from "./constants";

const NavBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vw;
  background-color: red;
  height: 100vh;
  left: 0;
  top: 0;
  padding: 1rem 3rem;
`;

const Content = styled.div`
  width: 50vw;
  height: 60vh;
  margin-left: 40vw;
  background-color: azure;
`;
interface Props {
  userType?: UserType;
}

function DashboardPage({ userType }: Props) {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    signOutAction(dispatch);
  };

  return (
    <>
      <NavBar>
        {NavBarElementsByType.get(userType!)?.map((element) => (
          <Link to={element.path}>{element.name}</Link>
        ))}
        <button onClick={handleOnClick}>Wyloguj się</button>
      </NavBar>
      <Content>
        <Routes>
          <Route
            path="ratings"
            // @ts-ignore
            element={<Table columns={ratingColumns} rows={ratingRows} />}
          />
          <Route
            path="frequency"
            // @ts-ignore
            element={<Table columns={frequencyColumns} rows={frequencyRows} />}
          />
        </Routes>
      </Content>
    </>
  );
}

export default DashboardPage;
