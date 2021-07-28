/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Login.css"
import Modal from "react-modal"
import { useGlobalContext } from "../../context/context";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        backgroundColor: 'transparent'
    },
};

// Bind modal to appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

export default function Login() {
    const { setIsOpen, modalIsOpen } = useGlobalContext()

    function openModal() {
        setIsOpen(true);
    }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    // }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="login_container">
                    <div className="login_info">
                        <h2>Login</h2>
                        <p>Get access to your Orders, Wishlist and Recommendations</p>
                        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png" alt="" />
                    </div>
                    <div className="login_form">
                        <form action="">
                            <input type="text" className="text_id" placeholder="Enter Email/Mobile number" /><br />
                            <div id="password">
                                <input type="text" className="text_password" placeholder="Enter Password" /><span className="forgot_password"><a href="#">Forgot?</a></span>
                            </div>
                            <p className="privacy_policy">By continuing, you agree to Flipkart's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>
                            <button class="btn_login">Login</button>
                            <p style={{ color: "gray", textAlign: "center" }}>OR</p>
                            <div className="btn_otp">Request OTP</div>
                        </form>
                        <a class="brn_create_account" href="#">New to Flipkart? Create an account</a>
                    </div>
                </div>
            </Modal>
        </div>
    );
}