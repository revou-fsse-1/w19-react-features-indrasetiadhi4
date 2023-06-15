import "./App.css";
//import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";

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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
