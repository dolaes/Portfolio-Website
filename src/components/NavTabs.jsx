import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    const currentPage = useLocation().pathname
    return (
        <div className="nav nav-tabs items-center">
            <h1 className="nav-item p-5 font-mono font-medium text-5xl">
                <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    Daniel Olaes
                </Link>
            </h1>
            <ul className="space-x-4 flex font-mono base p-5 pt-8 absolute top-0 right-0">
                <li className="nav-item hover:underline hover:font-bold">
                    <Link
                        to="/"
                        className={currentPage === '/' ? 'nav-link active underline font-bold' : 'nav-link'}
                    >
                        About Me
                    </Link>
                </li>
                <li className="nav-item hover:underline hover:font-bold">
                    <Link
                        to="/Portfolio"
                        className={currentPage === '/Portfolio' ? 'nav-link active underline font-bold' : 'nav-link'}
                    >
                        Portfolio
                    </Link>
                </li>
                <li className="nav-item hover:underline hover:font-bold">
                    <Link
                        to="/Contact"
                        className={currentPage === '/Contact' ? 'nav-link active underline font-bold' : 'nav-link'}
                    >
                        Contact
                    </Link>
                </li>
                <li className="nav-item hover:underline hover:font-bold">
                    <Link
                        to="/Resume"
                        className={currentPage === '/Resume' ? 'nav-link active underline font-bold' : 'nav-link'}
                    >
                        Resume
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavTabs;