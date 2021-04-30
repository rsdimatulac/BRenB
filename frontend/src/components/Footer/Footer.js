import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdLanguage as LanguageIcon } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer__container">
            <div>© 2021 BRenB. No rights reserved.</div>
            <div className="footer__links">
                <LanguageIcon id="language"/>
                <p>English (US)</p>
                <a href="https://rsdimatulac.github.io/" style={{ textDecoration: "none" }}><p className="about__link">About the Developer</p></a>
                <a href="https://github.com/rsdimatulac/BRenB">
                    <FaGithub id="github"/>
                </a>
                <a href="https://www.linkedin.com/in/renerosedimatulac/">
                    <FaLinkedinIn id="linkedin"/>
                </a>
            </div>
        </div>
    )
}

export default Footer;
