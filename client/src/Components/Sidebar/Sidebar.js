import { Link } from "react-router-dom"
import { useGlobalContext } from '../../Context/Context'
import React from 'react'
import { MdApps, MdLanguage, MdHome, MdFavorite, MdNotifications, MdChat } from 'react-icons/md';
import { FiClipboard, FiUser } from "react-icons/fi";
import "./Sidebar.css"


export default function Sidebar({ toggleSidebar }) {
    const { authSuccess, amount } = useGlobalContext()
    return (
        <div id="sidebar" className="sidebar">
            <ul onClick={() => toggleSidebar()}>
                <li><MdHome id="react_icon" />
                    <span style={{ color: "white" }}>Home</span>
                    {/* <img style={{ width: "60px", marginLeft: "auto" }} src="https://logos-download.com/wp-content/uploads/2016/09/Flipkart_logo.png" alt="" /> */}
                </li>
                <li><span><MdApps className="nav_menu_icons" /></span>More on Flipkart</li>
                <li><span><MdLanguage className="nav_menu_icons" /></span>Choose Language</li>
                <li><span><FiClipboard className="nav_menu_icons" /></span>My Orders</li>
                <li>  <Link to="/cart" style={{ textDecoration: 'none' }}>
                    <div className="shopping-cart">
                        <svg width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path className="_1bS9ic" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#555">
                            </path>
                        </svg>
                        {/* <span id="cart" style={{  fontSize: ".7rem", marginLeft: ".5rem" }}>My Cart</span> */}
                        <span id="mycart">My Cart</span>
                        {authSuccess ?
                            amount > 0 ?
                                <span className="cart_total">{amount}</span>
                                :
                                null : null
                        }

                    </div>
                </Link>
                </li>
                <li><span><MdFavorite className="nav_menu_icons" /></span>My WishList</li>
                <li><span ><FiUser className="nav_menu_icons" /></span>My Account</li>
                <li><span><MdNotifications className="nav_menu_icons" /></span>My Notifications</li>
                <li><span><MdChat className="nav_menu_icons" /></span>My Chats</li>
                {/* <li>Notification preferences</li>
                <li>Help Centre</li>
                <li>Privacy Policy</li>
                <li>Legal</li> */}
            </ul>
        </div>

    )
}



