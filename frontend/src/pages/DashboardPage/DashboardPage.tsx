import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Ratings from "../../components/Ratings";
import Announcements from "../../components/Announcements";
import { signOutAction } from "../../state/actions/signOutAction";
import { UserType } from "../../state/slices/user";
import { NavBarElementsByType } from "./constants";
import Frequency from "../../components/Frequency";
import MyData from "../../components/MyData";
import Users from "../../components/Users";

const NavBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  background-color: #1d549c;
  height: 100vh;
  left: 0;
  top: 0;
  padding: 1rem 3rem;
  box-shadow: 14px 0px 36px 0px rgba(0, 0, 0, 0.75);
`;

const Content = styled.div`
  width: 50vw;
  height: 60vh;
  margin-left: 40vw;
`;

const LinkWrapper = styled.div`
  padding: 1rem 2rem;
  margin: 0.5rem;
  background-color: #a1c2e0;
  width: 60%;
  border-radius: 26px;
  cursor: pointer;

  &:hover {
    background-color: #295479;
    a {
      color: #fff !important;
    }
  }

  a {
    color: #000;
    text-decoration: none !important;
    width: 100%;
    height: 100%;
    display: block;
  }

  &:last-child {
    margin-bottom: 3rem;
  }
`;

const Logo = styled.div`
  width: 100%;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 18vh;
`;

const SignOutButtonWrapper = styled.div`
  margin-top: 8rem;
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
        <Logo>E-DZIENNIK</Logo>
        {NavBarElementsByType.get(userType!)?.map((element) => (
          <LinkWrapper>
            <Link to={element.path}>{element.name}</Link>
          </LinkWrapper>
        ))}
        <SignOutButtonWrapper>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleOnClick}
            sx={{ mt: 3, mb: 2 }}
          >
            Wyloguj się
          </Button>
        </SignOutButtonWrapper>
      </NavBar>
      <Content>
        <Routes>
          <Route path="ratings" element={<Ratings />} />
          <Route path="frequency" element={<Frequency />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="mydata" element={<MyData />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </Content>
    </>
  );
}

export default DashboardPage;
