import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inscription from "./Inscription";
import Connexion from "./Connexion";
import Src from "./Src";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/signup" element={<Inscription />} />
        <Route path="/src" element={<Src />} />
      </Routes>
    </Router>
  );
};

export default App;
