import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/session';
import LoginModal from '../LoginFormModal/LoginFormModal';
import SignupModal from "../SignupFormModal/SignupFormModal";
import useConsumeContext from "../../context/LoginSignupModalContext";

const DropdownMenu = ({ dark, isLoaded }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const { setShowMenu } = useConsumeContext();
    const history = useHistory();

    const logout = (e) => {
        e.preventDefault();
        history.push("/");
        dispatch(sessionActions.logout());
        setShowMenu(false);
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
                <li className={`modal__buttons ${dark}`}>
                    <LoginModal />
                </li>
                <li className={`modal__buttons ${dark}`}>
                    <SignupModal />
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
