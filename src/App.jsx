import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Inicio from "./view/inicio";




function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;