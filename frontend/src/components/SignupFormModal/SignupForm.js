import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import Login from '../LoginFormModal/LoginFormModal';
import './SignupForm.css';
import useConsumeContext from "../../context/LoginSignupModalContext";

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const { setShowSignUp, setShowLogin, setShowMenu } = useConsumeContext();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        
        if (!errors) {
            setShowSignUp(false);
            setShowLogin(false);
            setShowMenu(false);
        };

        return dispatch(sessionActions.signup({ firstName, lastName, email, username, password, confirmPassword }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    };

    return (
        <div className="signup__container">
            <form onSubmit={handleSubmit} className="form__container-signup">
                <h2>Welcome to BRenB</h2>
                {errors?.map((error, idx) => (
                    <div className="error__validation" key={idx}>・{error}</div>
                ))}
                <div className="fullname__input">
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        placeholder="First name"
                    />
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        placeholder="Last name"
                    />
                </div>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email"
                />
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Username"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Confirm password"
                />
                <button className="signup__button" type="submit">Sign Up</button>
                <div className="login__link">Have an account?<span id="login__link"><Login/></span></div>
            </form>
        </div>
    );
}

export default SignupFormPage;