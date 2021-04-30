import { Modal } from '../../context/Modal';
import SignupForm from "./SignupForm";
import useConsumeContext from "../../context/LoginSignupModalContext";

const SignupFormModal = () => {
    const { handleSignupModal, showSignUp } = useConsumeContext();
    
    return (
        <>
            <button onClick={handleSignupModal}>Sign Up</button>
            {showSignUp && (
                <Modal onClose={() => handleSignupModal()}>
                    <SignupForm />
                </Modal>
            )}
        </>
    );
}

export default SignupFormModal;