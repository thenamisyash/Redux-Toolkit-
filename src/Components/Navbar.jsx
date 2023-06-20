import React from "react";
import Logo from "../Asset/download.png"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
    const navigate = useNavigate()
    let count = useSelector((state) => state.items.length)
    // console.log(count)
    const direct = () => {
        navigate('/cart');
    }
    return (
        <>
            <div className="container-fluid">
                <div className="navbar">
                    <img src={Logo} alt="logo" />
                    <div className="cart-item" onClick={direct}>
                        <ion-icon name="cart"></ion-icon>
                        <div className="number">
                            <p>{count}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}