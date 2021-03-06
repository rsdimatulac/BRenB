import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import useConsumeContext from "../../context/LoginSignupModalContext";
import './LoginForm.css';

const LoginForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const { setShowSignUp, setShowLogin, setShowMenu } = useConsumeContext();

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const loginGuest = (e) => {
        e.preventDefault();
        setErrors([]);

        dispatch(sessionActions.login({ credential: "guestuser", password:"Password1!" }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        setShowSignUp(false);
        setShowLogin(false);
        setShowMenu(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        
        if (!errors) {
            setShowSignUp(false);
            setShowLogin(false);
            setShowMenu(false);
        };

        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    };

    const handleModalClickSignUp = () => {
        setShowLogin(false);
        setShowSignUp(true);
    }

    return (
        <div className="login__container">
            <form onSubmit={handleSubmit} className="form__container">
                <h2>Welcome to BRenB</h2>
                {errors.map((error, idx) => (
                    <div className="error__validation" key={idx}>・{error}</div>
                ))}
                <input
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                    placeholder="Username or Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                />
                <button className="login__buttons">Login</button>
                <button className="login__buttons" onClick={loginGuest}>Login as Guest</button>
                <div className="signup__link">Don't have an account?<span onClick={handleModalClickSignUp} id="signup__link">Sign Up</span></div>
            </form>
        </div>
    );
};

export default LoginForm;

//// CODE BEFORE MODAL IMPLEMENTATION ////

// <div className="form__container">
//     <ul>
//         {errors.map((error, idx) => <li key={idx}>{error}</li>)}
//     </ul>
//     <form className="form__login" onSubmit={handleSubmit}>
//         <label>
//             Username or Email
//             <input
//                 type="text"
//                 value={credential}
//                 onChange={(e) => setCredential(e.target.value)}
//                 required
//             />
//         </label>
//         <label>
//             Password
//             <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//             />
//         </label>
//         <button type="submit">Log In</button>
//     </form>
// </div>