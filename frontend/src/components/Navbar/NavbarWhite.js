import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { GoSearch as SearchIcon } from "react-icons/go";
import { MdLanguage as LanguageIcon } from "react-icons/md";
import { FiMenu as MenuIcon } from "react-icons/fi";
import { FaUserCircle as AvatarIcon } from "react-icons/fa";
import Logo from '../../images/homepage/airbnb-logo.png';
import DropdownMenu from "./DropdownMenu";
import useConsumeContext from "../../context/LoginSignupModalContext";
import "./Navbar.css"; // styling both NavBar and Dropdown Menu

const NavbarWhite = ({ isLoaded }) => {
    // const [showDatePicker, setShowDatePicker] = useState(false);
    const { showMenu, setShowMenu, setShowLogin, setShowSignUp } = useConsumeContext();
    const history = useHistory();

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
        <nav className={`navbar__container`}>
            <NavLink to="/">
                <img
                    className="navbar__logo"
                    src={Logo}
                    alt="AirBnB Logo" />
            </NavLink>
            {window.location.pathname !== "/bookings" &&
                <div className={`navbar__search`} onClick={handleClick}>
                    {/* <div className={`navbar__search`} onClick={() => setShowDatePicker(!showDatePicker)}> */}
                    <div className="navbar__search-title">
                        {/* TODO: Add logic to dynamically change this text by category of search */}
                        Start your search
                    </div>
                    <SearchIcon onClick={handleClick} className="search-icon" />
                    {/* <SearchIcon onClick={() => setShowDatePicker(!showDatePicker)} className="search-icon" /> */}
                    {/* {showDatePicker && <DatePicker />} */}
                </div>
            }
            <div className={`navbar__buttons`}>
                <div className={`become-a-host`}><p>Become a host</p></div>
                <LanguageIcon className={`language-icon`} />
                <div id={`menu-avatar`} onClick={openMenu}>
                    <MenuIcon id="menu-icon" />
                    {sessionUser ? <img id="avatar" src={sessionUser.avatar} alt="" /> : <AvatarIcon id="avatar" />}
                </div>
                {showMenu && <DropdownMenu isLoaded={isLoaded} />}
            </div>
        </nav>
    );
}

export default NavbarWhite;
