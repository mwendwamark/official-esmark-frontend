import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./Pages/Contacts";
import About from "./Pages/About";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
