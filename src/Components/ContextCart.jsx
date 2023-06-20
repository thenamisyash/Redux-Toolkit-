import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Ads from '../Asset/ads1.jpg';
import Ads1 from "../Asset/ads2.jpg";
import Ads2 from "../Asset/amazon ads.jpg";
import Ads3 from "../Asset/tuff.jpg";
import { Items } from "./Items";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css';
import { useDispatch } from "react-redux";
import { addItem} from "./store/slice/userslice";
export const ContextCart = () => {
    const dispatch = useDispatch();
    const addtoCart = ( img, title, describtion, price) => {
        // console.log(img, title, describtion, price)
        dispatch(addItem({img, title, describtion, price}))
        toast("Add To Cart")
    }
    return (
        <>
            <section id="carts">
                <div className="container-fluid">
                    <div className="carousel">
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Ads}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Ads1}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Ads2}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Ads3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <Items addtoCart={addtoCart} />
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}