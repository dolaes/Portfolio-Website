import Project from "../components/Project";

function Portfolio() {
    return (
        <div>
            <h1 className="p-5 ps-10 font-mono font-bold text-xl bg-black text-white">Portfolio</h1>
            <ul className="p-5 flex grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <li className="p-5">
                    <Project title="Space Shark" image="spaceShark.png" description="Unreal Engine Physics FPS" skillArray={["Unreal Engine 5", "C++", "Git"]} deploy="https://dolaes.itch.io/space-shark" github="https://github.com/dolaes/Space-Shark" />
                </li>
                <li className="p-5">
                    <Project title="Thimble Knight" image="thimbleKnight.png" description="Unity 2D Platformer" skillArray={["Unity", "C#", "Git"]} deploy="https://nickguava.itch.io/thimble-knight" github="https://github.com/dolaes/Thimble-Knight" />
                </li>
                <li className="p-5">
                    <Project title="7 Wonders of The World" image="7Wonders.png" description="Interactive 7 Wonders Website" skillArray={["HTML", "CSS", "JavaScript"]} deploy="https://dolaes.github.io/Interactive-7-Wonders/" github="https://github.com/dolaes/Interactive-7-Wonders" />
                </li>
                <li className="p-5">
                    <Project title="Portfolio Website" image="portfolio.png" description="Personal Portfolio Website" skillArray={["tailwindcss", "React.js", "JavaScript"]} deploy="https://dolaes.github.io/Interactive-7-Wonders/" github="https://github.com/dolaes/Interactive-7-Wonders" />
                </li>
                <li className="p-5">
                    <Project title="Power Bi Showcase" image="powerBI.png" description="Microsoft Power BI Coursework" skillArray={["Microsoft Power BI"]} deploy="https://docs.google.com/document/d/1a60eMUenohA31gchtDU7yMT0keYBGhAgZaz3kKqgkQA/edit?usp=sharing" github="https://docs.google.com/document/d/1a60eMUenohA31gchtDU7yMT0keYBGhAgZaz3kKqgkQA/edit?usp=sharing" />
                </li>
                <li className="p-5">
                    <Project title="Tableau" image="tableau.png" description="Tableau Coursework" skillArray={["Tableau"]} deploy="https://docs.google.com/document/d/18sHq5_HueTTYZ8XWbG4DOfPh3TEOhS6FuEV_AAWy7nI/edit?usp=sharing" github="https://docs.google.com/document/d/18sHq5_HueTTYZ8XWbG4DOfPh3TEOhS6FuEV_AAWy7nI/edit?usp=sharing" />
                </li>
            </ul>
        </div>
    ); g
}

export default Portfolio;
