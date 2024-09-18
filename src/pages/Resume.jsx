function Resume() {
    const skillArray = ['Microsoft Office 365', 'Game Design', 'Unreal Engine', 'Unity', 'Microsoft Power BI', 'Tableau', 'Figma', 'Slack', 'JavaScript', 'HTML', 'CSS', 'TypeScript', 'React.js', 'C#', 'C++', 'Python', 'SQL', 'Agile Scrum Management', 'Git'];

    return (
        <div>
            <h1 className="p-5 ps-10 font-mono font-bold text-xl bg-black text-white">Resume</h1>
            <div className="p-5">
                <h1 className="font-mono font-bold text-xl text-black">Skills</h1>
                <ul className="list-disc font-mono p-5 flex grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {skillArray.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <a className="font-mono text-black hover:text-white border border-black hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-black dark:text-black dark:hover:text-white dark:hover:bg-black" href="./src/assets/danielolaes_resume_cv.pdf" download="danielolaes_resume_cv.pdf">Download Daniel Olaes's Resume</a>
            </div>
        </div>
    );
}

export default Resume;
