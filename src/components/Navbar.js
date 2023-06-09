
import React from 'react';
import { Link } from "react-router-dom";
import "./NavbarStyles.css"
const Navbar = () => {
  return (
    <nav>
        <ul className="navbar">
            <li className="single">
                <Link to="/">Inicio</Link>
            </li>
            <li className="dropdown">
                <p>Proyectos</p>
                <ul className="dropdown-content">
                    <li><Link to="/current-projects">Proyectos Actuales</Link></li>
                    <li><Link to="/closed-projects">Proyectos Cerrados</Link></li>
                    <li><Link to="/collaboration-projects">Proyectos de Colaboración</Link></li>
                </ul>
            </li>
            <li className="dropdown">
                <p>Alumnos</p>
                <ul className="dropdown-content">
                    <li><Link to="/current-alumni">Alumnos Actuales</Link></li>
                    <li><Link to="/ex-alumni">Ex-Alumnos</Link></li>
                    <li><Link to="/collaborators">Colaboradores</Link></li>
                </ul>
            </li>
        </ul>
  </nav>    
  );
}

export default Navbar;