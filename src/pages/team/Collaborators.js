
import React from "react";
import { Link } from "react-router-dom";
import collabrtrs from "../../data/team/collab.json"

const Collaborators = () => {
  return (
    <>
        <Link to="/">Inicio</Link>
        <h1>Colaboradores</h1>
        <ul>
                {collabrtrs.map((data, index) => (
                    <div key={index}>
                        <li>
                            <p>
                                {data.name}
                                {data.links?.map((linksData, index) => (
                                    <> <a href={linksData.href} target="_blank">[{linksData.name}]</a></>
                                ))}
                            </p>    
                        </li>
                    </div>
                ))}
            </ul>
    </>
  );
  };
  
  export default Collaborators;
  