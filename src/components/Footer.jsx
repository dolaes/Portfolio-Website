function Footer() {
    return (
        <div className="bg-black text-white text-center">
            <h1 className="p-5 font-mono font-bold text-lg ">Made by Daniel Olaes</h1>
            <ul className="flex justify-center pb-3">
                <li>
                    <a href="https://www.linkedin.com/in/daniel-olaes/" target="_blank">
                        <img src="./assets/icons/linkedin.svg" alt="LinkedIn Icon"></img>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/dolaes" target="_blank">
                        <img src="./assets/icons/github.svg" alt="GitHub Icon"></img>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/daniel_dvo/" target="_blank">
                        <img src="./assets/icons/instagram.svg" alt="Instagram Icon"></img>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;