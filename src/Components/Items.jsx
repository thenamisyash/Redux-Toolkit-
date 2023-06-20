import React from "react";
import { products } from "./Products";
export const Items = ({ addtoCart }) => {
    return (
        <>
            {
                products.map((index, value) => {
                    let data = index;
                    return (
                        <div className="items" key={value}>
                            <div className="col-12 products-describtion">
                                <div className="img-portion">
                                    <img src={data.img} alt="laptops" />
                                </div>
                                <div className="describtion">
                                    <p>{data.title}<span> ₹ {data.price}</span></p>
                                    <p>{data.description}</p>
                                    <div className="addto">
                                        <button onClick={() => addtoCart(data.img, data.title, data.description, data.price)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div><hr />
                        </div>
                    )
                })
            }

        </>
    )
}