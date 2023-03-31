
import people_es from '../data/people_es.json';
import projects_es from '../data/projects_es.json';
import {Link } from "react-router-dom";

const Home = () => {
    return <div className="App">
    <div id="introduccion"> 
      <h1>Logen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet eros vitae risus iaculis, eget accumsan dolor fermentum. Sed vitae nibh sit amet felis lacinia elementum. Suspendisse consectetur, quam eget lacinia porttitor, augue ipsum dapibus eros, et facilisis nunc sem in dui. Duis ut lorem luctus, bibendum nulla vitae, aliquam massa. Pellentesque at tellus eget nunc iaculis faucibus. Maecenas vitae justo est. Sed eget augue nec massa fringilla lobortis. Aliquam quis elit sit amet dolor tincidunt elementum ac eu dolor. Donec sagittis orci vel lectus rutrum eleifend. Integer ac ex fermentum, sagittis lacus vel, ultricies eros. Vestibulum sit amet mauris a nulla accumsan ultrices.</p>
    </div>
    <br/>
    <div id="proyectos">
      <h2>Proyectos</h2>
      {projects_es.map((data, index) => (
      <div key={data.title}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        {data.links?.map((linksData,index)=>(
            <a href={linksData.url} target="_blank">[{linksData.name}]</a>
        ))}

      </div>
    ))}
    </div>
    <br/>
    <div id="personas">
      <h2>Equipo</h2>
          <ul>
          <li><Link to="/current-alumni">Alumnos Actuales</Link></li>
          <li><Link to="/ex-alumni">Ex-Alumnos</Link></li>
          <li><Link to="/collaborators">Colaboradores</Link></li>
          </ul>
    </div>
    <br/>
    <div id="publicaciones">
      <h2>Publicaciones</h2>
    </div>
    <br/>
    <div id="contacto">
      <h2>Contacto</h2>
      <p>Si desea contactarnos, le ofrecemos los siguientes medios de comunicación:</p>
      <ul>
        <li>Teléfono: 1234567890</li>
        <li>Email: correo@real.com</li>
      </ul>
    </div>

    <div id="pie-de-pagina">
      <p>Dpie de pagina</p>
    </div>
  </div>;
  };
  
  export default Home;
  