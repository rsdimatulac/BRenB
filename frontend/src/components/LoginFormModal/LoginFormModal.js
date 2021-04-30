import { Modal } from '../../context/Modal';
import LoginForm from "./LoginForm";
import useConsumeContext from "../../context/LoginSignupModalContext";

const LoginFormModal = () => {
    const { handleLoginModal, showLogin } = useConsumeContext();

    return (
        <>
            <button onClick={handleLoginModal}>Log In</button>
            {showLogin && (
                <Modal onClose={() => handleLoginModal()}>
                    <LoginForm />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;