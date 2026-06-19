import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function contact() {
    return (
        <>
            <section class="contact" id="Contact">
                <h2>contact</h2>

                <div className="contact-container">

                    <div className="contact-info">
                        <h2>get in touch</h2>
                        <p> E-mail <br />
                            phaniprazwal2008@gmail.com <br />
                            Phone <br />
                            9381389599 <br />
                            Location <br />
                            planadu,andrapradesh,india</p>


                        <div class="social-links">
                            <a href="mailto:phaniprazwal2008@gmail.com"><FaEnvelope size={40} color="#EA4335" /></a>
                            <a href="https://www.linkedin.com/in/phani-prazwal-kotha-0256a2374/"><FaLinkedin size={40} color="#0A66C2" /></a>
                            <a href="https://github.com/phaniprazwal2008-ui"><FaGithub size={40} color="#ffffff" /></a>
                        </div>
                    </div>
                    <form className="contact-form">
                        <div className="contact-form-items">
                            <label for="name">Name:</label>
                            <input type="text" placeholder="enter your name" id="name" />

                            <label for="email">Email:</label>
                            <input type="email" placeholder="enter your email" id="email" />

                            <label For="message">message:</label>
                            <textarea rows="5" name="message" id="message" placeholder="enter your message"></textarea>

                            <button type="submit">send message</button>
                        </div>
                    </form>
                </div>
            </section >
        </>
    )
}