import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import CurrentAlumni from "./pages/team/CurrentAlumni";
import ExAlumni from "./pages/team/ExAlumni";
import Collaborators from "./pages/team/Collaborators";

import CurrentProjects from "./pages/projects/CurrentProjects"
import ClosedProjects from "./pages/projects/ClosedProjects"
import CollaborationProjects from "./pages/projects/CollaborationProjects"

import Projects from "./pages/Projects.js"
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import './index.css';

export default function App() {
  return (
    <div classname="index">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="current-projects" element={<CurrentProjects/>}/>
            <Route path="closed-projects" element={<ClosedProjects/>} />
            <Route path="collaboration-projects" element={<CollaborationProjects/>}/>
            <Route path="current-alumni" element={<CurrentAlumni />} />
            <Route path="ex-alumni" element={<ExAlumni />} />
            <Route path="collaborators" element={<Collaborators />} />
            <Route path="blogs" element={<Blogs />} />
            <Route  path="contact" element={<Contact />} />
            <Route  path="projects" element={<Projects />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);