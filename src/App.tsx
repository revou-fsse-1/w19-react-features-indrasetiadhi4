//import "./App.css";
//import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { TableCategories } from "./components/TableCategories/TableCategories";
import { NotFound } from "./components/NotFound";
import { AddCategory } from "./components/AddCategory";
import { EditCategory } from "./components/EditCategory";
import { ProtectedRoutes } from "./components/ProtectedRoutes";

export interface UserProviderProps {
  children: JSX.Element;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <TableCategories />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/add"
          element={
            <ProtectedRoutes>
              <AddCategory />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <ProtectedRoutes>
              <EditCategory />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
