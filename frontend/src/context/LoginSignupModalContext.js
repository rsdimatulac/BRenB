import { createContext, useState, useContext } from "react";

const context = createContext();

export const LoginSignupModalProvider = (props) => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleSignupModal = () => {
        setShowLogin(false);
        setShowSignUp(!showSignUp);
    };

    const handleLoginModal = () => {
        setShowLogin(!showLogin);
        setShowSignUp(false);
    };

    return (
        <context.Provider value={{showLogin, showSignUp, showMenu, setShowMenu, setShowLogin, setShowSignUp, handleSignupModal, handleLoginModal}}>
            {props.children}
        </context.Provider>
    )
};

export default function useConsumeContext() {
    return useContext(context);
};