import profile from "../images/profile.jpeg";
export default function aboutMe() {
    return (
        <>
            <section class="about" id="AboutMe">
                <img src={profile} alt="my profile" className="profile-pic" />
                <div className="about-me">
                    <h2>ABOUT ME</h2>
                    <p>

                        I'm Prazwal, a student and aspiring web developer. I am passionate about technology and enjoy learning how websites and applications are built. Currently, I am focusing on React and modern JavaScript while strengthening my fundamentals in HTML and CSS.

                        I believe in learning by building, so I regularly work on projects to improve my skills. My aim is to grow into a full-stack developer and create applications that provide value to users.
                    </p>
                </div>
            </section>
        </>
    )
}