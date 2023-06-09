import React from "react";
import { Link } from "react-router-dom";
import pregradoData from "../../data/team/pregrado.json"
import magisterdata from "../../data/team/magister.json"
const CurrentAlumni = () => {
    return (
        <>
            <Link to="/">Inicio</Link>
            <h1>Alumnos Actuales</h1>
            <br/>
            <h2>Pregrado</h2>
            <ul>
                {pregradoData.map((data, index) => (
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
            <br/>
            <h2>Magister</h2>
            <ul>
                {magisterdata.map((data, index) => (
                    <div key={index}>
                        <li>
                            <p>
                                {data.name}
                                {data.links?.map((linksData, index) => (
                                    <a href={linksData.href} target="_blank"> [{linksData.name}]</a>
                                ))}
                            </p>
                        </li>
                    </div>
                ))}
            </ul>
            <br/>
        </>
    );
};

export default CurrentAlumni;