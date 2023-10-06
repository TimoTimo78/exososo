import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Inscription from './Inscription';
import Connexion from './Connexion';

function Rootes() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={App} />
        <Route path="/inscription" component={Inscription} />
      </Routes>
    </Router>
  );
}

export default Routes;