import Home from "./componemts/home";
import AboutMe from "./componemts/aboutMe";
import Education from "./componemts/education";
import Skills from "./componemts/skills";
import Project from "./componemts/project";
import Contact from "./componemts/contact";
import Navbar from "./componemts/navbar";
import "./App.css"
export default function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Home />
        <AboutMe />
        <Education />
        <Skills />
        <Project />
        < Contact />
      </div>
    </>
  )

}



