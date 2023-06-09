
import React from "react";
import { Link } from "react-router-dom";
import dataCollab from "../../data/projects/collab.json"
const CollaborationProjects = () => {
  return (<>
    <Link to="/">Inicio</Link>
    <h1>Proyectos Colaborativos</h1>
    <ul>
      {dataCollab.map((data, index) => (
          <li>
            <p><a href={data.linkTo} target="_blank">{data.name}</a></p>
          </li>
      ))}
    </ul>
  </>
  );
};

export default CollaborationProjects;
