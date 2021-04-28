import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/session';

const DropdownMenu = ({ dark, isLoaded }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

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
                    <NavLink to={`/users/${sessionUser.id}`}>Profile</NavLink>
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

    return (
        <div className={`menu__dropdown-container ${dark}`}>
            <ul className={`dropdown__list ${dark}`}>
                <li className="dropdown__welcome">
                    {sessionUser ? <p>{`Welcome, ${sessionUser.firstName}!`}</p> : <p>{`Welcome!`}</p>}
                </li>
                {isLoaded && sessionLinks}
                <li className="dropdown__divider">
                </li>
                <li>
                    <a href="https://github.com/rsdimatulac/BRenB">GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/renerosedimatulac/">LinkedIn</a>
                </li>
            </ul>
        </div>
    );
};

export default DropdownMenu;
