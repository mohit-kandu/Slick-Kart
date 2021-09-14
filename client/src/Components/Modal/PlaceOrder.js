import React from 'react'
import "./PlaceOrder.css"
import Modal from "react-modal"
import { useGlobalContext } from "../../Context/Context";
import { useForm } from "react-hook-form"
import axios from "axios"
import { AiFillCloseSquare } from "react-icons/ai"

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
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => await axios.post(`${url}/order`, { data, itemIDs }).then(resp => {
        if (resp.data.msg === "Success") {
            window.location = "/order"
        }
    }).catch(err => console.log("Error sending form data: ", err));


    function closeModal() {
        setModalIsOpen(false);
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

                        <form id="order_form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="close_modal"><AiFillCloseSquare onClick={() => closeModal()} /></div>


                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" placeholder="Your first name" {...register("firstName", { required: true, minLength: 4 })} />
                            {errors.firstName && <p>First name is invalid</p>}

                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" placeholder="Your last name" {...register("lastName", { required: true, minLength: 4 })} />
                            {errors.lastName && <p>Last name is invalid</p>}

                            <label htmlFor="contact">Contact Number</label>
                            <input type="text" name="contact" placeholder="Your contact number" {...register("contact", { required: true, pattern: /^\d{10}$/ })} />
                            {errors.contact && <p>Contact number is invalid</p>}


                            <label htmlFor="email">e-mail</label>
                            <input type="text" name="email" placeholder="Your e-mail" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.email && <p>e-mail ID is invalid</p>}


                            <label htmlFor="address1">Address</label>
                            <input type="text" name="address1" placeholder="Your address" {...register("address1", { required: true })} />
                            {errors.address1 && <p>Address is invalid</p>}


                            <label htmlFor="address2">Address</label>
                            <input type="text" name="address2" placeholder="Your address" {...register("address2", { required: true })} />
                            {errors.address2 && <p>Address is invalid</p>}


                            <input type="hidden" name="itemIDs" value={itemIDs} />
                            <button>Place Order</button>
                        </form>
                    </div>
                }
            </Modal>
        </div>

    )

}