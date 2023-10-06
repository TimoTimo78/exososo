import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';


function Header() {
    return (
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/inscription" activeClassName="active">
                Inscription
              </NavLink>
            </li>
             <li>
              <NavLink to="/connexion" activeClassName="active">
                Connexion
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  export default Header;