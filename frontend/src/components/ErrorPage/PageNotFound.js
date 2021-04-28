import { NavLink } from "react-router-dom";
import GirlGIF from "../../images/page-not-found.gif";
import "./PageNotFound.css";

const PageNotFound = () => {
    return (
        <div className="error__container">
            <div className="error__details">
                <div className="error__message">
                    <h1>Oops!</h1>
                    <h2>We can't seem to find the page you're looking for.</h2>
                    <h6>Error code: 404</h6>
                    <ul className="links__container">
                        <li>Here are some helpful links instead:</li>
                        <NavLink to="/" className="links__list" style={{ textDecoration: "none" }}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="/search" className="links__list" style={{ textDecoration: "none" }}>
                            <li>Search</li>
                        </NavLink>
                        <li><a href="https://github.com/rsdimatulac/BRenB" className="links__list">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/renerosedimatulac/" className="links__list">LinkedIn</a></li>
                    </ul>
                </div>
                <div className="error__image" width="313" height="428">
                    <img src={GirlGIF} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;
