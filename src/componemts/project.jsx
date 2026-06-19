export default function project() {
    return (
        <>
            <section className="projects" id="Projects">
                <h2>Projects</h2>

                <div className="projects-grid">

                    <div className="project-card">
                        <h1>Portfolio Website</h1>

                        <p>
                            A personal portfolio website built using
                            React and CSS to showcase my skills and projects.
                        </p>

                        <div className="tech-stack">
                            <span>React</span>
                            <span>CSS</span>
                        </div>

                        <div className="project-links">
                            <a href="#">Live Demo</a>
                            <a href="#">GitHub</a>
                        </div>
                    </div>
                    <div className="project-card">
                        <h1>To-Do App</h1>

                        <p>
                            A task management app with local storage support.
                        </p>

                        <div className="tech-stack">
                            <span>React</span>
                            <span>JavaScript</span>
                        </div>

                        <div className="project-links">
                            <a href="#">Live Demo</a>
                            <a href="#">GitHub</a>
                        </div>
                    </div>
                    <div className="project-card">
                        <h1>Weather App</h1>

                        <p>
                            A weather forecasting application that allows users
                            to search for cities and view current weather data,
                            including temperature, humidity, and wind conditions.
                        </p>

                        <div className="tech-stack">
                            <span>React</span>
                            <span>API Integration</span>
                            <span>CSS</span>
                        </div>

                        <div className="project-links">
                            <a href="#">Coming Soon</a>
                            <a href="#">GitHub</a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
} 