import { NavLink, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { GoSearch as SearchIcon } from "react-icons/go";
import { MdLanguage as LanguageIcon } from "react-icons/md";
import { FiMenu as MenuIcon } from "react-icons/fi";
import { FaUserCircle as AvatarIcon } from "react-icons/fa";
import Logo from '../../images/homepage/airbnb-logo.png';
import LogoBNW from '../../images/homepage/airbnb-logo-bnw.png';
import DropdownMenu from "./DropdownMenu";
import useConsumeContext from "../../context/LoginSignupModalContext";
import "./Navbar.css"; // styling both NavBar and Dropdown Menu

const Navbar = ({ isLoaded }) => {
    const [dark, setDark] = useState('dark');
    const [logo, setLogo] = useState(LogoBNW);
    // const [showDatePicker, setShowDatePicker] = useState(false);
    const { showMenu, setShowMenu, setShowLogin, setShowSignUp } = useConsumeContext();
    const history = useHistory();
    
    // what triggers the navbar style change
    useEffect(() => {
        const scrollFunction = function () {
            if (window.pageYOffset > 0) {
                setLogo(Logo);
                setDark("");
            } else if (window.pageYOffset === 0) {
                setLogo(LogoBNW);
                setDark("dark");
            }
        };
        window.addEventListener('scroll', scrollFunction);
        return () => window.removeEventListener('scroll', scrollFunction);
    }, []);

    const handleClick = () => {
        history.push("/search");
    }

    // get the current user
    const sessionUser = useSelector(state => state.session.user);

    // shows the menu
    const openMenu = () => {
        // if (showMenu) return;
        setShowMenu((prevState) => !prevState);
        setShowLogin(false); // closes when dropdown closes
        setShowSignUp(false); // closes when dropdown closes
    };

    return (
        <nav className={`navbar__container ${dark}`}>
            <NavLink to="/">
                <img
                    className="navbar__logo"
                    src={logo}
                    alt="AirBnB Logo" />
            </NavLink>
            <div className={`navbar__search ${dark}`} onClick={handleClick}>
                {/* <div className={`navbar__search ${dark}`} onClick={() => setShowDatePicker(!showDatePicker)}> */}
                <div className="navbar__search-title">
                    Start your search
                </div>
                <SearchIcon onClick={handleClick} className="search-icon" />
                {/* <SearchIcon onClick={() => setShowDatePicker(!showDatePicker)} className="search-icon" /> */}
                {/* {showDatePicker && <DatePicker />} */}
            </div>
            {dark === "dark" && <div className={`navbar__info ${dark}`}>
                <span><a href="#explore_nearby">Explore Nearby</a></span>
                <span><a href="#live_anywhere">Live Anywhere</a></span>
                <span><a href="#featured_homes">Featured Homes</a></span>
            </div>}
            <div className={`navbar__buttons ${dark}`}>
                <div className={`become-a-host ${dark}`}><p>Become a host</p></div>
                <LanguageIcon className={`language-icon ${dark}`} />
                <div id={`menu-avatar`} className={`${dark}`} onClick={openMenu}>
                    <MenuIcon id="menu-icon" />
                    {sessionUser ? <img id="avatar" src={sessionUser.avatar} alt="" /> : <AvatarIcon id="avatar" />}
                </div>
                {showMenu && <DropdownMenu dark={dark} isLoaded={isLoaded} />}
            </div>
        </nav>
    );
}

export default Navbar;

// useEffect(() => {
//     if (!showMenu) return; // if showing, just return
//     const closeMenu = () => {
//         setShowMenu(false);
//     };
//     document.addEventListener('click', closeMenu);
//     // clean up
//     return () => document.removeEventListener("click", closeMenu);
// }, [showMenu]);