import React from 'react';
import { Link } from "react-router-dom";
import "./ProjectsStyles.css"
const Projects = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/current-projects">Proyectos Actuales</Link></li>
        <li><Link to="/closed-projects">Proyectos Cerrados</Link></li>
        <li><Link to="/collaboration-projects">Proyectos de Colaboración</Link></li>
        <li><Link to="/current-alumni">Alumnos Actuales</Link></li>
        <li><Link to="/ex-alumni">Ex-Alumnos</Link></li>
        <li><Link to="/collaborators">Colaboradores</Link></li>
      </ul>
    </nav>
  );
}
export default Projects;