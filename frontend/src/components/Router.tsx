import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Dashboard from "./Dashboard";

interface Props {
  isUserAuthenticated: boolean;
}
function Router({ isUserAuthenticated }: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={isUserAuthenticated ? <Dashboard /> : <LoginPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
