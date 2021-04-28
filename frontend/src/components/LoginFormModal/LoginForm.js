import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SignUp from "../SignupFormModal/SignupFormModal";
import './LoginForm.css';

const LoginForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const loginGuest = () => {
        setCredential("guestuser");
        setPassword("Password1!");
        return dispatch(sessionActions.login({ credential, password }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    };

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
                <button className="login__buttons" type="submit">Login</button>
                <button className="login__buttons" onClick={loginGuest}>Login as Guest</button>
                <div className="signup__link">Don't have an account?<span id="signup__link"><SignUp /></span></div>
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