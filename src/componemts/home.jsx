import profile from "../images/profile.jpeg"
export default function home() {
    return (
        <>
            <section class="home" id="Home">

                <img src={profile} alt="my profile" className="profile-pic" />
                <div className="home-content">
                    <h1 >HI,I AM <span>PRAZWAL</span> &#128075;</h1>
                    <p>Hi, I'm Prazwal, a passionate web development student. I am currently learning React and modern web technologies. I enjoy creating clean, responsive websites and continuously expanding my skills through hands-on projects.
                    </p>
                </div>

            </section >
        </>
    )
}