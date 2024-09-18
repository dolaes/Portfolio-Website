function About() {
    return (
        <div>
            <h1 className="p-5 ps-10 font-mono font-bold text-xl bg-black text-white">About Me</h1>
            <div className="flex items-center">
                <img className="p-6 drop-shadow-xl rounded-full w-96 h-96" src="public/pfp.jpg" alt="Daniel Olaes Profile Pic"></img>
                <div>
                    <p className="m-9 flex-col font-mono">Hello! I am Daniel, and I am a recent graduate with a B.S. in Computer Science: Game Design from UC Santa Cruz and a minor in Technology and Information Management. In addition, my academic background is complemented by hands-on experience from UCI’s Software Development Boot Camp. Proficient in programming languages like C++, C#, Python, and web technologies such as HTML, CSS, and JavaScript, I have a passion for building innovative solutions.</p>
                    <p className="m-9 flex-col font-mono">My background spans game development using Unreal and Unity, project management as a game producer, as well as experience with business intelligence tools like Power BI, Tableau, and SQL. I also have experience in web development using React and TypeScript. I've worked in Agile Scrum environments, using prototyping tools like Figma and Softr to deliver high-quality products. Additionally, my leadership roles as a coordinator in UCSC's Filipino mentorship program and as a coding instructor have honed my communication, collaboration, and problem-solving skills.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
