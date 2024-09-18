function Project(props) {
    return (
        <div>
            <a className="flex flex-col items-center rounded-lg md:flex-row max-w-xl bg-black shadow-xl">
                <img className="object-contain w-80 h-48 md:w-64 md:h-48 rounded-s-lg" src={`./assets/projects/${props.image}`} alt={`${props.title} Image`}></img>
                <div className="flex flex-col justify-between p-4 leading-normal w-full md:w-1/2">
                    <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                    <ul className="ps-5 mb-1 font-normal text-gray-700 dark:text-gray-400 list-disc">
                        {props.skillArray.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <a className="mx-8 font-mono text-white hover:text-black border border-white hover:bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-white" href={props.deploy} target="_blank">Deploy</a>
                    <a className="mx-8 font-mono text-white hover:text-black border border-white hover:bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-white" href={props.github} target="_blank">GitHub</a>
                </div>
            </a>
        </div>
    )
}

export default Project;