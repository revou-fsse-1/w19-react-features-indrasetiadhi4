import "./App.css";
//import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { TableCategories } from "./components/TableCategories/TableCategories";
import { NotFound } from "./components/NotFound";
import { AddCategory } from "./components/AddCategory";
import { EditCategory } from "./components/EditCategory";

function App() {
  // return (
  //   <>
  //     <Login />
  //     <Register />
  //     <Home />
  //     <NotFound />
  //   </>
  // );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TableCategories />} />
        <Route path="/add" element={<AddCategory />} />
        <Route path="/edit/:id" element={<EditCategory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
