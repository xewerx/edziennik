import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import { UserType } from "../state/slices/user";

interface Props {
  isUserAuthenticated: boolean;
  userType?: UserType;
}

function Router({ isUserAuthenticated, userType }: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            isUserAuthenticated ? (
              <DashboardPage userType={userType} />
            ) : (
              <LoginPage />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
