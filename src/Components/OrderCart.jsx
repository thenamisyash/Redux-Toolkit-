import React, { useState } from "react";
import './Cart.css'
import { useSelector } from "react-redux";
export const OrderCart = () => {
    const [value, setValue] = useState('');
    // const [price, setPrice] = useState("")
    let count = useSelector((state) => state.items)
    console.log(count, value)
    return (
        <>
            <div className="container-fluid">
                <div className="row bucket">
                    <div className="col-12">
                        <div className="addedcart">
                            <h2>Shopping Cart</h2>
                            <p>Price</p>
                        </div>
                        <hr />
                        {
                            count ?
                                count.map((index, values) => {
                                    let data = index;
                                    return (
                                        <>
                                            <div className="col-12" key={values}>
                                                <div className="anything">
                                                    <div className="col-8">
                                                        <div className="image-part">
                                                            <img src={data.img} alt="cart" />
                                                            <p>{data.title}</p>
                                                        </div>
                                                        <div className="describtion-cart">
                                                            <span>{data.describtion}</span>
                                                            <span>In Stock</span>
                                                            <select name="select" value={value} onChange={(e) => setValue(e.target.value)}>
                                                                <option value="" selected>Qty:1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                                <option value="6">6</option>
                                                                <option value="7">7</option>
                                                                <option value="8">8</option>
                                                                <option value="9">9</option>
                                                                <hr />
                                                                <option value="10">10+</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-3price-sec">
                                                        <h3>₹ {data.price}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                        </>
                                    )
                                })
                                :
                                <p>Nothing was added to the Cart</p>
                        }

                        <div className="subtotal">
                            <p>Subtotal : ₹ <b>2500</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}