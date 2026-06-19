import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaNodeJs,
    FaPython,
} from "react-icons/fa";

import {
    SiMongodb,
    SiExpress,
    SiC,
    SiCplusplus,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
export default function skills() {
    return (
        <>
            <section className="skills" id="Skills">
                <h2>skills</h2>
                <div className="skills-grid">
                    <div className="skill-card">
                        <h1>frontend</h1>
                        <span className="skill"><FaHtml5 color="#E34F26" size={40} />HTML</span>
                        <span className="skill"><FaCss3Alt color="#1572B6" size={40} />CSS</span>
                        <span className="skill"><FaJs color="#F7DF1E" size={40} />JS</span>
                        <span className="skill"><FaReact color="#61DAFB" size={40} />REACT</span>
                    </div>
                    <div className="skill-card">
                        <h1>backend</h1>
                        <span className="skill"><SiExpress color="#FFFFFF" size={40} />EXPRESS.js</span>
                        <span className="skill"><FaNodeJs color="#339933" size={40} />NODE.js</span>
                        <span className="skill"><SiMongodb color="#47A248" size={40} />MONGO DS</span>
                    </div>
                    <div className="skill-card">
                        <h1>program-language</h1>
                        <span className="skill"><FaPython color="#3776AB" size={40} />PYTHON</span>
                        <span className="skill"><SiC color="#A8B9CC" size={40} />C</span>
                        <span className="skill"><SiCplusplus color="#00599C" size={40} />C++</span>
                    </div>
                    <div className="skill-card">
                        <h1>Tools</h1>
                        <span className="skill"><VscVscode color="#007ACC" size={40} />VS CODE</span>
                        <span className="skill"><FaGitAlt color="#F05032" size={40} />GIT</span>
                    </div>
                </div>
            </section >
        </>
    )
}