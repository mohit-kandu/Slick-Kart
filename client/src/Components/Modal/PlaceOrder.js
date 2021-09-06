import React from 'react'
import "./PlaceOrder.css"
import Modal from "react-modal"
import { useGlobalContext } from "../../Context/Context";

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

// Bind modal to appElement
Modal.setAppElement(document.getElementById('root'));

export default function Login() {
    const { url, setModalIsOpen, modalIsOpen, itemIDs } = useGlobalContext()

    // function openModal() {
    //     setIsOpen(true);
    // }
    function closeModal() {
        setModalIsOpen(false);
    }

    const handleSubmit = (e) => {
        const handleForm = (e) => {
            e.preventDefault()
        }

        var form = document.getElementById("order_form")
        form.addEventListener('submit', handleForm);
        form.removeEventListener('submit', handleForm);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                {
                    <div className="order_wrapper">
                        <h2>Please enter your order details here:</h2>
                        <form id="order_form"
                            method="post"
                            encType="application/x-www-form-urlencoded"
                            action={`${url}/order`}
                        >
                            <div className="customer_name" >
                                <input type="text" name="firstName" placeholder="Your first name" />
                                <input type="text" name="lastName" placeholder="Your last name" />
                            </div>
                            <input type="text" name="contact" placeholder="Your contact number" />
                            <input type="text" name="email" placeholder="Your e-mail" />
                            <input type="text" name="address1" placeholder="Your address" />
                            <input type="text" name="address2" placeholder="Your address" />
                            <input type="hidden" name="itemIDs" value={itemIDs} />
                            <button onClick={(e) => handleSubmit(e)} >Place Order</button>
                        </form>
                    </div>
                }
            </Modal>
        </div>

    )

}