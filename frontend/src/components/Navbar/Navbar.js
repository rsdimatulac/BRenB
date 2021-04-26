import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoSearch as SearchIcon } from "react-icons/go";
import { MdLanguage as LanguageIcon } from "react-icons/md";
import { FiMenu as MenuIcon } from "react-icons/fi";
import { FaUserCircle as AvatarIcon } from "react-icons/fa";
import Logo from '../../images/homepage/airbnb-logo.png';
import LogoBNW from '../../images/homepage/airbnb-logo-bnw.png';
import * as sessionActions from '../../store/session';
// import GuestAvatar from "../../images/homepage/avatar.jpg";
// import DatePicker from '../DatePicker/DatePicker';
import "./Navbar.css";


const Navbar = ({ isLoaded }) => {
    const [dark, setDark] = useState('dark');
    const [logo, setLogo] = useState(LogoBNW);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();
    // const history = useHistory();

    // get the current user
    const sessionUser = useSelector(state => state.session.user);
    
    // shows the menu
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    // what closes the dropdown menu, it will always start closed
    useEffect(() => {
        if (!showMenu) return; // if showing, just return
        const closeMenu = () => {
            setShowMenu(false);
        };
        document.addEventListener('click', closeMenu);
        // clean up
        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);
    
    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    // What to show on the dropdown menu
    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <li>
                    {/* TODO: UPDATE LINK HERE WITH USER.ID */}
                    <NavLink to={`/users/:id`}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/logout" onClick={logout}>Log Out</NavLink>
                </li>
            </>
        );
    } else {
        sessionLinks = (
            <>
                <li>
                    <NavLink to="/login">Log In</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">Sign Up</NavLink>
                </li>
            </>
        );
    }

    // what triggers the navbar style change
    window.onscroll = function () {
        if (window.pageYOffset > 0) {
            setLogo(Logo);
            setDark("");
        } else if (window.pageYOffset === 0) {
            setLogo(LogoBNW);
            setDark("dark")
        }
    }

    return (
        <nav className={`navbar__container ${dark}`}>
            <NavLink to="/">
                <img
                    className="navbar__logo"
                    src={logo}
                    alt="AirBnB Logo" />
            </NavLink>
            <div className={`navbar__search ${dark}`} onClick={() => setShowDatePicker(!showDatePicker)}>
                <div className="navbar__search-title">
                    Start your search
                </div>
                <SearchIcon onClick={() => setShowDatePicker(!showDatePicker)} className="search-icon" />
                {/* {showDatePicker && <DatePicker />} */}
            </div>
            {dark === "dark" && <div className={`navbar__info ${dark}`}>
                <span>Places to stay</span>
                <span>Experiences</span>
                <span>Online Experiences</span>
            </div>}
            <div className={`navbar__buttons ${dark}`}>
                <div className={`become-a-host ${dark}`}><p>Become a host</p></div>
                <LanguageIcon className={`language-icon ${dark}`} />
                <div id={`menu-avatar`} className={`${dark}`} onClick={openMenu}>
                    <MenuIcon id="menu-icon" />
                    {/* <AvatarIcon id="avatar" /> */}
                    {sessionUser ? <img id="avatar" src={sessionUser.avatar} alt=""/> : <AvatarIcon id="avatar" />}
                    {/* {sessionUser.username === "guestuser" ? <img id="avatar" src={sessionUser.avatar}/> : <AvatarIcon id="avatar" />} */}
                </div>
                {showMenu && (
                    <div className={`menu__dropdown-container ${dark}`}>
                        <ul className={`dropdown__list ${dark}`}>
                            <li>
                                {sessionUser ? <p>{`Welcome ${sessionUser.username}!`}</p> : <p>{`Welcome!`}</p>}
                            </li>
                            <li>
                                <a href="https://github.com/rsdimatulac/BRenB">GitHub</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/renerosedimatulac/">LinkedIn</a>
                            </li>
                            {isLoaded && sessionLinks}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;

// ../../images/homepage/avatar-guestuser.jpg